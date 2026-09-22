import { NextRequest, NextResponse, after } from "next/server";
import { Resend } from "resend";
import { checkRateLimit } from "@/lib/rateLimit";
import { contactSchema, firstError, type ContactInput } from "@/lib/contact-schema";
import { SITE, absoluteUrl, GUIDE_PATH } from "@/lib/site-config";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const sanitizeForSubject = (value: string) => value.replace(/[\r\n\t]/g, " ").trim().slice(0, 120);

// On Vercel `x-real-ip` is set by the platform and can't be spoofed by the client;
// the first x-forwarded-for hop is a fallback for other hosts behind a trusted proxy.
function clientIp(request: NextRequest): string {
  return (
    request.headers.get("x-real-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}

/** Appends the lead to a Google Sheet via an Apps Script web-app URL. */
// Appending a row through Apps Script measured anywhere from 3s to 45s, and the
// default function budget on most hosts is 10s — which would kill the request
// mid-write and lose the very lead the sheet exists to save.
export const maxDuration = 60;

/**
 * Apps Script runs one execution of a script at a time, so two submissions that
 * land together queue behind each other and the second can take far longer than
 * the first. Measured back-to-back: 3s, 8s, 10s, 13s, 45s. A single attempt
 * against any fixed deadline therefore fails occasionally for no reason worth
 * telling a visitor about, so a timeout is retried once — the queue has usually
 * drained by then.
 */
async function storeLead(lead: ContactInput, ip: string): Promise<boolean> {
  if (await attemptStore(lead, ip, 15000)) return true;
  await new Promise((r) => setTimeout(r, 1500));
  return attemptStore(lead, ip, 25000);
}

async function attemptStore(lead: ContactInput, ip: string, timeoutMs: number): Promise<boolean> {
  const url = process.env.LEADS_WEBHOOK_URL;
  if (!url) return false;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        receivedAt: new Date().toISOString(),
        ...lead,
        consent: undefined,
        website: undefined,
        ip,
        secret: process.env.LEADS_WEBHOOK_SECRET,
      }),
      signal: AbortSignal.timeout(timeoutMs),
    });
    // Apps Script replies 200 even when it rejects the request, so trust the body, not the status.
    const result = await res.json().catch(() => null);
    if (!res.ok || !result?.ok) {
      console.error("Lead store webhook failed:", res.status, result?.error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Lead store webhook error:", err);
    return false;
  }
}

async function notifyTeam(resend: Resend, lead: ContactInput): Promise<boolean> {
  const to = process.env.CONTACT_NOTIFICATION_EMAIL;
  if (!to) return false;

  const fields: [string, string | undefined][] = [
    ["Lead Type", lead.leadType],
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Company", lead.company],
    ["Country", lead.country],
    ["Service Intent", lead.serviceIntent],
    ["Capital Scale", lead.capitalScale],
    ["Timeline", lead.timeline],
    ["Target Region", lead.targetRegion],
  ];
  const rowsHtml = fields
    .filter(([, v]) => Boolean(v))
    .map(([label, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666;">${label}</td><td>${escapeHtml(String(v))}</td></tr>`)
    .join("");

  const { error } = await resend.emails.send({
    from: fromAddress(),
    to,
    replyTo: lead.email,
    subject: `New ${LEAD_LABEL[lead.leadType]}: ${sanitizeForSubject(lead.serviceIntent)} — ${sanitizeForSubject(lead.name)}`,
    html: `
      <div style="font-family:sans-serif;font-size:14px;color:#111;">
        <h2 style="margin-bottom:16px;">New Vision Saudi inquiry</h2>
        <table>${rowsHtml}</table>
        ${lead.message ? `<p style="margin-top:16px;"><strong>Message:</strong><br/>${escapeHtml(lead.message).replace(/\n/g, "<br/>")}</p>` : ""}
        ${lead.planSummary ? `<p style="margin-top:16px;"><strong>Estimate shown to the lead:</strong><br/>${escapeHtml(lead.planSummary).replace(/\n/g, "<br/>")}</p>` : ""}
      </div>`,
  });
  if (error) console.error("Resend notify error:", error);
  return !error;
}

/** Best-effort acknowledgement to the lead. Only delivers once a sending domain is verified in Resend. */
async function autoReply(resend: Resend, lead: ContactInput): Promise<void> {
  const body: Record<ContactInput["leadType"], { subject: string; html: string }> = {
    inquiry: {
      subject: "We've received your inquiry — Vision Saudi",
      html: `<p>Thank you for contacting Vision Saudi. Your inquiry has been received and assigned to a senior strategist,
        who will respond within 24 hours.</p>`,
    },
    estimate: {
      subject: "Your Saudi market-entry roadmap — Vision Saudi",
      html: `<p>Thank you for using the Vision Saudi Market Entry Estimator. Here is the indicative roadmap you generated:</p>
        <p style="padding:12px 16px;background:#f4f7f5;border-left:4px solid #059669;">${escapeHtml(lead.planSummary ?? "").replace(/\n/g, "<br/>")}</p>
        <p>A senior strategist will follow up within 24 hours with your full plan, including the government fee
        breakdown, document checklist and localisation requirements for your situation.</p>`,
    },
    guide: {
      subject: "Your Saudi Market Entry Guide 2026 — Vision Saudi",
      html: `<p>Thank you for your interest. Your copy of the <strong>Saudi Market Entry Guide 2026</strong> is here:</p>
        <p><a href="${absoluteUrl(GUIDE_PATH)}">Download the guide (PDF)</a></p>
        <p>When you're ready to discuss your own plans, simply reply to this email.</p>`,
    },
  };

  try {
    const { error } = await resend.emails.send({
      from: fromAddress(),
      to: lead.email,
      replyTo: SITE.email,
      subject: body[lead.leadType].subject,
      html: `
        <div style="font-family:sans-serif;font-size:14px;color:#111;line-height:1.6;">
          <p>Dear ${escapeHtml(lead.name)},</p>
          ${body[lead.leadType].html}
          <p>For anything urgent you can reach us on WhatsApp at ${escapeHtml(SITE.phoneDisplay)}.</p>
          <p>Regards,<br/>Vision Saudi Advisory<br/>${escapeHtml(SITE.address.city)}, ${escapeHtml(SITE.address.country)}</p>
        </div>`,
    });
    if (error) console.warn("Auto-reply not sent:", error.message);
  } catch (err) {
    console.warn("Auto-reply failed:", err);
  }
}

const LEAD_LABEL: Record<ContactInput["leadType"], string> = {
  inquiry: "inquiry",
  estimate: "market-entry estimate request",
  guide: "guide download",
};

const fromAddress = () => process.env.CONTACT_FROM_EMAIL || "Vision Saudi <onboarding@resend.dev>";

export async function POST(request: NextRequest) {
  const ip = clientIp(request);
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again in a minute." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot filled: pretend success so the bot doesn't learn it was caught.
  if (body && typeof body === "object" && "website" in body && (body as { website?: unknown }).website) {
    return NextResponse.json({ ok: true });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: firstError(parsed) }, { status: 400 });
  }
  const lead = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const resend = apiKey ? new Resend(apiKey) : null;

  // Email first, because it is fast: Resend answers in about a second, while
  // appending a row through Apps Script measured 11-25s from a laptop. Once the
  // team has the lead by email it is not lost, so the visitor should not be made
  // to wait on the slow path — and on a platform with a function time limit,
  // waiting on it is how you lose the lead you were trying to save.
  const notified = resend
    ? await notifyTeam(resend, lead).catch((err) => (console.error("Notify failed:", err), false))
    : false;

  if (notified) {
    after(async () => {
      if (!(await storeLead(lead, ip))) {
        console.error("Lead emailed but not stored:", { email: lead.email, intent: lead.serviceIntent });
      }
      await autoReply(resend!, lead);
    });
    return NextResponse.json({ ok: true });
  }

  // No email went out, so the sheet is the only record there will be. Here the
  // wait is the point: we cannot tell the visitor it worked until it has landed.
  const stored = await storeLead(lead, ip);

  if (!stored) {
    console.error("LEAD LOST — neither storage nor email succeeded:", { email: lead.email, intent: lead.serviceIntent });
    return NextResponse.json(
      { error: "We couldn't submit your inquiry right now. Please try WhatsApp or email us directly." },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: true });
}
