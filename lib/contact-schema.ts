import { z } from "zod";

// Shared by both contact forms and /api/contact, so client and server enforce
// identical rules. Every value the UI can send must appear in these lists.
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

const optionalText = (max: number) =>
  z.string().trim().max(max, `Please keep this under ${max} characters.`).optional().or(z.literal(""));

// Accepts international formats (+966 50 000 0000, 0044-20..., etc.): 7–15 digits.
const isValidPhone = (v: string) => {
  const digits = v.replace(/\D/g, "").length;
  return /^\+?[\d\s\-()]+$/.test(v) && digits >= 7 && digits <= 15;
};

export const contactSchema = z
  .object({
    leadType: z.enum(LEAD_TYPES).default("inquiry"),
    // Human-readable summary attached by the estimator, so the team sees what the lead was shown.
    planSummary: optionalText(4000),
    name: z.string().trim().min(2, "Please enter your full name.").max(100),
    email: z.string().trim().email("Please provide a valid email address.").max(200),
    phone: z
      .string()
      .trim()
      .max(30)
      .refine((v) => v === "" || isValidPhone(v), {
        message: "Please enter a valid phone number, including country code.",
      })
      .optional(),
    company: optionalText(150),
    country: optionalText(100),
    serviceIntent: z.enum(SERVICE_INTENTS, { message: "Please select what you are looking for." }),
    capitalScale: z.enum(CAPITAL_SCALES, { message: "Please select a capital range." }).optional(),
    timeline: z.enum(TIMELINES, { message: "Please select a timeline." }).optional(),
    targetRegion: z.enum(TARGET_REGIONS, { message: "Please select a region." }).optional(),
    message: optionalText(3000),
    consent: z.literal(true, { message: "Please accept the privacy policy to continue." }),
    // Honeypot: invisible to humans, so any value means a bot filled the form.
    website: z.string().max(0).optional().or(z.literal("")),
  })
  // Guide downloads only need name + email; every other lead needs a phone for the callback.
  .refine((d) => d.leadType === "guide" || Boolean(d.phone), {
    message: "Please enter a valid phone number, including country code.",
    path: ["phone"],
  });

export type ContactInput = z.infer<typeof contactSchema>;

/** First human-readable error, for showing inline above the submit button. */
export function firstError(result: { success: false; error: z.ZodError }): string {
  return result.error.issues[0]?.message ?? "Please check the form and try again.";
}
