import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const SUGGESTED = [
  { href: "/services", label: "Our services" },
  { href: "/services/business-setup", label: "Business setup" },
  { href: "/insights", label: "Guides & briefings" },
  { href: "/contact", label: "Contact a strategist" },
];

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-[#0A0D0C] text-white px-6 py-32">
      <div className="max-w-xl text-center">
        <p className="inline-flex items-center gap-2 text-[#10E784] text-xs font-bold tracking-wider uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          <span>404 · Page not found</span>
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          This page doesn&apos;t exist.
        </h1>
        <p className="text-[#94A3B8] font-light leading-relaxed mb-10">
          The link may be outdated or mistyped. Here are some places to continue.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-10">
          <Button variant="primary" size="lg" showArrow href="/">
            Back to homepage
          </Button>
        </div>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {SUGGESTED.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="inline-block py-3 -my-3 text-[#B9B3A8] hover:text-[#10E784] transition-colors">
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
