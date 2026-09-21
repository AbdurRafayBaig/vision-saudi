/**
 * Startup preflight for the things that silently lose money.
 *
 * The contact route already fails safely — it tries a webhook store and an
 * email, and logs LEAD LOST if both fail. The problem is that nobody reads
 * server logs until a lead is already gone. This says it once, loudly, at
 * boot, so a misconfigured deploy is obvious before the first visitor rather
 * than after the first missed enquiry.
 */
export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;
  if (process.env.NODE_ENV !== "production") return;

  const problems: string[] = [];

  const from = process.env.CONTACT_FROM_EMAIL ?? "";
  if (!process.env.RESEND_API_KEY) {
    problems.push("RESEND_API_KEY is unset — no lead notification will be emailed.");
  } else if (from.includes("resend.dev")) {
    problems.push(
      "CONTACT_FROM_EMAIL is still the Resend sandbox sender. Resend will only " +
        "deliver to the address the account was registered with, so every real " +
        "lead is dropped. Verify a domain and set a sender on it."
    );
  }

  if (!process.env.LEADS_WEBHOOK_URL) {
    problems.push(
      "LEADS_WEBHOOK_URL is unset — there is no fallback store, so a failed " +
        "email means the lead is gone for good."
    );
  }

  // Vercel supplies its own production URL, so this is only a problem when
  // neither is present and the hardcoded default is in use.
  const hasOrigin =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (!hasOrigin) {
    problems.push("No site origin — canonical URLs and share cards fall back to the hardcoded domain.");
  }

  if (!process.env.NEXT_PUBLIC_GA_ID) {
    problems.push("NEXT_PUBLIC_GA_ID is unset — no analytics, so conversions cannot be measured.");
  }

  if (problems.length === 0) return;

  const rule = "─".repeat(72);
  console.warn(
    ["", rule, "  VISION SAUDI — GO-LIVE CONFIGURATION INCOMPLETE", rule]
      .concat(problems.map((p, i) => `  ${i + 1}. ${p}`))
      .concat([`  See .env.example for each of these.`, rule, ""])
      .join("\n")
  );
}
