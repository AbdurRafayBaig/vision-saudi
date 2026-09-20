import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl } from "@/lib/site-config";
import { translator } from "@/lib/messages";

export interface Crumb {
  label: string;
  href?: string;
}

/**
 * Trail under the hero, so a visitor arriving from search knows where they are
 * and can step back up. Also emits BreadcrumbList structured data, which is what
 * turns a result's green URL line into a readable path.
 */
export function Breadcrumbs({ trail, bare = false }: { trail: Crumb[]; bare?: boolean }) {
  const t = translator();
  const items = [{ label: t("breadcrumb.home"), href: "/" }, ...trail];

  return (
    <nav aria-label={t("breadcrumb.label")} className={bare ? "" : "border-b border-white/10 bg-[#0A0D0C]"}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            ...(c.href ? { item: absoluteUrl(c.href) } : {}),
          })),
        }}
      />
      <ol
        className={`flex flex-wrap items-center gap-x-1 gap-y-1 text-xs text-[#94A3B8] ${
          bare ? "mb-8" : "max-w-[1280px] mx-auto px-6 py-3 lg:px-8"
        }`}
      >
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={c.label} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#4B5563]" aria-hidden="true" />}
              {c.href && !isLast ? (
                <Link
                  href={c.href}
                  className="inline-flex min-h-[44px] items-center rounded px-1 hover:text-[#10E784] transition-colors"
                >
                  {c.label}
                </Link>
              ) : (
                <span className="px-1 text-[#D8CCB8]" aria-current="page">
                  {c.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
