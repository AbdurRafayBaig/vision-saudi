import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MASTER_SERVICES } from "@/data/services";

/**
 * The other pillars, shown at the foot of a service page. Someone who read this
 * far is deciding what else they need; making them go back to /services to find
 * out loses them.
 */
export function RelatedServices({ currentSlug }: { currentSlug: string }) {
  const others = MASTER_SERVICES.filter((s) => s.slug !== currentSlug);

  return (
    <section className="border-t border-white/10 bg-[#0A0D0C] py-[var(--space-section)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
          What usually comes with this
        </h2>
        <p className="text-sm text-[#94A3B8] mb-8 max-w-2xl">
          Most engagements touch more than one of these. Each runs through the same team.
        </p>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-[#10E784]/60 hover:bg-white/[0.05]"
              >
                <span>
                  <span className="block text-xs font-mono font-bold text-[#10E784] mb-2">{s.number}</span>
                  <span className="block font-display text-base font-bold text-white mb-1.5 group-hover:text-[#10E784] transition-colors">
                    {s.title}
                  </span>
                  <span className="block text-xs leading-relaxed text-[#94A3B8]">{s.tagline}</span>
                </span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#10E784]">
                  Open
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
