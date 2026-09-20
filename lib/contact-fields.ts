// Field vocabulary and a dependency-free validator, shared by the forms.
//
// The browser gets THIS file; the zod schema in contact-schema.ts stays on the
// server, where validation actually has to be trusted. Keeping zod out of the
// client bundle saves ~380KB of JavaScript on every page that has a form.
// The rules below mirror the schema so people see errors before a round trip —
// anything they disagree on, the server rejects and its message is displayed.

export const SERVICE_INTENTS = [
  "business-setup",
  "corporate-services",
  "real-estate",
  "premium-residency",
  "technology",
  "partnership",
  "other",
] as const;

export const CAPITAL_SCALES = ["Under $500K", "$500K - $2M", "$2M - $10M", "$10M+ Enterprise"] as const;
export const TIMELINES = ["Immediate (1-3 months)", "Planning (3-6 months)", "Long-term (6-12 months)"] as const;
export const LEAD_TYPES = ["inquiry", "estimate", "guide"] as const;
export const TARGET_REGIONS = ["Riyadh (Olaya / KAFD)", "Jeddah / Western", "Eastern Province", "All Kingdom"] as const;

export type ServiceIntent = (typeof SERVICE_INTENTS)[number];

/** What the forms show for each intent. Keyed by the enum, so adding a value
 *  without a label is a type error rather than a blank button. */
export const SERVICE_INTENT_LABELS: Record<ServiceIntent, string> = {
  "business-setup": "Business Setup & Market Entry",
  "corporate-services": "Corporate Services & GRO",
  "real-estate": "Real Estate Investment Advisory",
  "premium-residency": "Saudi Premium Residency",
  technology: "Technology & Digital Infrastructure",
  partnership: "Strategic Partnership (Service / Success)",
  other: "Other Commercial Inquiry",
};

export const INTENT_OPTIONS = SERVICE_INTENTS.map((value) => ({
  value,
  label: SERVICE_INTENT_LABELS[value],
}));
export type LeadType = (typeof LEAD_TYPES)[number];

/** Accepts international formats (+966 50 000 0000, 0044-20…): 7–15 digits. */
export function isValidPhone(v: string): boolean {
  const digits = v.replace(/\D/g, "").length;
  return /^\+?[\d\s\-()]+$/.test(v) && digits >= 7 && digits <= 15;
}

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

/** First problem with the form, or null when it looks submittable. */
export function validateLead(data: Record<string, unknown>): string | null {
  const leadType = str(data.leadType) || "inquiry";

  if (str(data.name).length < 2) return "Please enter your full name.";
  if (str(data.name).length > 100) return "Please keep this under 100 characters.";

  const email = str(data.email);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 200) {
    return "Please provide a valid email address.";
  }

  const phone = str(data.phone);
  const phoneRequired = leadType !== "guide";
  if ((phoneRequired || phone) && !isValidPhone(phone)) {
    return "Please enter a valid phone number, including country code.";
  }

  if (!SERVICE_INTENTS.includes(str(data.serviceIntent) as ServiceIntent)) {
    return "Please select what you are looking for.";
  }

  if (data.consent !== true) return "Please accept the privacy policy to continue.";

  return null;
}
