import { NextRequest, NextResponse } from "next/server";
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
async function storeLead(lead: ContactInput, ip: string): Promise<boolean> {
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
      signal: AbortSignal.timeout(8000),
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

  // Store and email in parallel. The lead is only lost if BOTH fail.
  const [stored, notified] = await Promise.all([
    storeLead(lead, ip),
    resend ? notifyTeam(resend, lead).catch((err) => (console.error("Notify failed:", err), false)) : Promise.resolve(false),
  ]);

  if (!stored && !notified) {
    console.error("LEAD LOST — neither storage nor email succeeded:", { email: lead.email, intent: lead.serviceIntent });
    return NextResponse.json(
      { error: "We couldn't submit your inquiry right now. Please try WhatsApp or email us directly." },
      { status: 503 }
    );
  }

  if (resend) await autoReply(resend, lead);
  return NextResponse.json({ ok: true });
}
