// Single source of truth for business contact details and the public URL.
// Change a phone number or domain here and every page, link, and SEO tag follows.

const WHATSAPP_NUMBER = "966540457397"; // E.164 without "+", as wa.me expects

/**
 * The public origin, in order of preference:
 *
 *  1. NEXT_PUBLIC_SITE_URL — set this once a real domain is connected.
 *  2. Vercel's own production URL, which it provides automatically. Without
 *     this step the default below was used on a deployment whose domain was
 *     not connected yet, so every canonical link named a parked page and every
 *     og:image 404'd — each LinkedIn and WhatsApp share rendered an empty card.
 *  3. The intended domain, for local builds where neither is present.
 */
const vercelHost =
  process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL;

const origin =
  process.env.NEXT_PUBLIC_SITE_URL ?? (vercelHost ? `https://${vercelHost}` : "https://visionsaudi.com");

export const SITE = {
  name: "Vision Saudi",
  url: origin.replace(/\/$/, ""),

  // A mailbox that actually receives. advisory@visionsaudi.com was never set up
  // — that domain has no MX record at all, so everything sent to it bounced,
  // and the contact page was publishing it to visitors and to search engines.
  email: "akadir.ksa1@gmail.com",
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
