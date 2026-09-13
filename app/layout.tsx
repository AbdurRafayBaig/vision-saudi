import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
  metadataBase: new URL("https://visionsaudi.com"),
  openGraph: {
    title: "Vision Saudi — One Kingdom. One Vision. One Ecosystem.",
    description:
      "Most firms get you established. We built what comes next. Establish, Activate, Operate, Connect, and Grow in Saudi Arabia.",
    url: "https://visionsaudi.com",
    siteName: "Vision Saudi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision Saudi | Saudi Business & Investment Platform",
    description:
      "Your CR opens the door. We take you further into the Saudi ecosystem.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { ThemeProvider } from "@/components/providers/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontDisplay.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-[#0A0D0C] text-slate-900 dark:text-white transition-colors duration-400">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
