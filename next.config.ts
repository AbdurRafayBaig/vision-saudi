import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

// 'unsafe-inline' is needed for Next's inline bootstrap scripts, JSON-LD and the GA
// init snippet; moving to nonces would require dynamic rendering of every page.
// 'unsafe-eval' is only needed by the dev server (React Refresh), never in production.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com",
  "font-src 'self' data:",
  `connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com${isDev ? " ws: wss:" : ""}`,
  // Scheduling embed for the Book-a-call section (see NEXT_PUBLIC_BOOKING_URL).
  "frame-src https://calendly.com https://*.calendly.com https://cal.com https://*.cal.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
];

const nextConfig: NextConfig = {
  // Lets the E2E suite build into its own directory. Running `next build` against
  // the default `.next` while `next dev` is serving from it corrupts the running
  // dev server, so the test harness sets NEXT_DIST_DIR to isolate itself.
  distDir: process.env.NEXT_DIST_DIR || ".next",

  poweredByHeader: false,



  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
