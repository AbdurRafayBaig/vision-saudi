import type { Metadata } from "next";
import { ViewTransition } from "react";
import { Inter, IBM_Plex_Sans_Arabic, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { ConsentAndAnalytics } from "@/components/analytics/ConsentAndAnalytics";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE, absoluteUrl } from "@/lib/site-config";
import { DEFAULT_LOCALE, ENABLED_LOCALES, dirOf, localePath } from "@/lib/i18n";

const ORGANIZATION_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: absoluteUrl("/images/logo_hdr_dark.png"),
  image: absoluteUrl("/images/og-default.jpg"),
  email: SITE.email,
  telephone: SITE.phoneE164,
  description:
    "Saudi market-entry advisory: MISA licensing, company formation, corporate services, commercial real estate and Premium Residency.",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressCountry: SITE.address.countryCode,
  },
  areaServed: { "@type": "Country", name: "Saudi Arabia" },
};

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const fontDisplay = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Declared now so Arabic has a typeface the day its copy lands. preload is off
// and the variable is only attached for RTL locales, so English pages don't
// fetch it.
const fontArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "Vision Saudi | Premium Saudi Business, Investment & Market-Entry Platform",
    template: "%s | Vision Saudi",
  },
  description:
    "Vision Saudi connects international enterprise, investors, and founders to the wider Saudi ecosystem. Business setup, real estate, Premium Residency, and post-establishment operations.",
  keywords: [
    "Vision Saudi",
    "Saudi Business Setup",
    "Saudi Arabia Market Entry",
    "Saudi Real Estate Investment",
    "Saudi Premium Residency",
    "MISA License Saudi Arabia",
    "Riyadh Business Advisory",
    "SLNEE Strategic Technology Partner",
    "Commercial Registration KSA",
  ],
  authors: [{ name: "Vision Saudi Strategy & Advisory" }],
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: "/",
    // Only locales actually served are advertised; pointing hreflang at a page
    // that does not exist yet is worse than not declaring it.
    languages: Object.fromEntries(ENABLED_LOCALES.map((l) => [l, localePath("/", l)])),
  },
  openGraph: {
    title: "Vision Saudi — One Kingdom. One Vision. One Ecosystem.",
    description:
      "Most firms get you established. We built what comes next. Establish, Activate, Operate, Connect, and Grow in Saudi Arabia.",
    url: SITE.url,
    siteName: "Vision Saudi",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Vision Saudi — Saudi business, investment and market-entry platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision Saudi | Saudi Business & Investment Platform",
    description:
      "Your CR opens the door. We take you further into the Saudi ecosystem.",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = DEFAULT_LOCALE;
  const dir = dirOf(locale);

  return (
    <html
      lang={locale}
      dir={dir}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${fontSans.variable} ${fontDisplay.variable} ${dir === "rtl" ? fontArabic.variable : ""} h-full antialiased`}
    >
      <head>
        {/* The site is already dark. This tells the Dark Reader extension to leave it alone;
            otherwise it rewrites colours before React loads and causes hydration mismatches. */}
        <meta name="darkreader-lock" />
        {/* Scroll-reveal animations render their `initial` opacity server-side, so without
            JS those sections would stay invisible. Reveal them when JS is unavailable. */}
        <noscript>
          <style>{`.reveal,[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}.svg-draw{animation:none!important;stroke-dashoffset:0!important}.svg-fill-in{animation:none!important;fill-opacity:1!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col bg-[#0A0D0C] text-white pb-16 sm:pb-0">
        <JsonLd data={ORGANIZATION_LD} />
        <Navbar />
        {/* Route changes are React transitions, so this crossfades page content on navigation. */}
        <ViewTransition default="page-fade">
          <main className="flex-1">{children}</main>
        </ViewTransition>
        <Footer />
        <WhatsAppButton />
        <MobileActionBar />
        <ConsentAndAnalytics />
      </body>
    </html>
  );
}
