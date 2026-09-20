import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { MASTER_EXPERIENCE_TRACK_RECORD } from "@/data/experience";
import { CLIENT_LOGOS, TESTIMONIALS } from "@/data/testimonials";
import { TiltCard } from "@/components/ui/TiltCard";

// Market entry first: it's the most relevant proof for the people this homepage targets.
const FEATURED_IDS = ["corporate-market-entry", "enterprise-gov-tech", "semi-gov-infra"];
const FEATURED = FEATURED_IDS.map((id) => MASTER_EXPERIENCE_TRACK_RECORD.find((e) => e.id === id)).filter(
  (e): e is (typeof MASTER_EXPERIENCE_TRACK_RECORD)[number] => Boolean(e)
);

export default function ProofSection() {
  return (
    <section className="bg-[#0A0D0C] text-white py-[var(--space-section-lg)] border-b border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-[#10E784] mb-4">Track record</p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.12] tracking-tight">
              Delivered in the Kingdom, not promised.
            </h2>
          </div>
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 py-3 -my-3 text-sm font-semibold text-[#10E784] hover:text-white transition-colors"
          >
            All case studies <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED.map((c) => (
            <TiltCard key={c.id} className="h-full">
              <article className="h-full flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 hover:border-[#10E784]/50 transition-colors">
                <span className="self-start rounded-full border border-white/15 px-3 py-1 text-[11px] font-semibold text-[#B9B3A8] mb-5">
                  {c.clientSector}
                </span>
                <h3 className="font-display text-xl font-bold text-white mb-3 leading-snug">{c.title}</h3>
                <p className="text-sm text-[#B9B3A8] leading-relaxed mb-6 flex-1">{c.summary}</p>
                <p className="font-display text-lg font-bold text-[#10E784] mb-4">{c.impactMetrics[0]}</p>
                <p className="text-xs text-[#64748B] border-t border-white/10 pt-4">{c.deliveryPartner}</p>
              </article>
            </TiltCard>
          ))}
        </div>

        {TESTIMONIALS.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="rounded-3xl border border-white/10 bg-white/[0.02] p-7">
                <Quote className="h-6 w-6 text-[#10E784] mb-4" aria-hidden="true" />
                <blockquote className="text-[#D8CCB8] leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption>
                  <span className="block text-sm font-semibold text-white">{t.name}</span>
                  <span className="block text-xs text-[#94A3B8]">{t.title}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        {CLIENT_LOGOS.length > 0 && (
          <ul className="flex flex-wrap items-center justify-center gap-4 mt-12">
            {CLIENT_LOGOS.map((l) => (
              <li key={l.name} className="flex h-16 w-40 items-center justify-center rounded-2xl bg-white px-5">
                <Image src={l.src} alt={l.name} width={130} height={40} className="h-9 w-auto object-contain" />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
