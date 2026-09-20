// Single source of truth for business contact details and the public URL.
// Change a phone number or domain here and every page, link, and SEO tag follows.

const WHATSAPP_NUMBER = "966540457397"; // E.164 without "+", as wa.me expects

export const SITE = {
  name: "Vision Saudi",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://visionsaudi.com").replace(/\/$/, ""),

  email: "advisory@visionsaudi.com",
  phoneDisplay: "+966 54 045 7397",
  phoneE164: `+${WHATSAPP_NUMBER}`,

  address: {
    street: "King Fahd Road, Olaya District",
    city: "Riyadh",
    country: "Kingdom of Saudi Arabia",
    countryCode: "SA",
  },
} as const;

export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const mailtoUrl = (): string => `mailto:${SITE.email}`;

export const absoluteUrl = (path = "/"): string =>
  `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;

/** Public path of the gated "Saudi Market Entry Guide 2026" PDF. */
export const GUIDE_PATH = "/guides/saudi-market-entry-guide-2026.pdf";

/** Scheduling link (Calendly / Cal.com). The booking section stays hidden until this is set. */
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";
