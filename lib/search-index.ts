import { MASTER_SERVICES } from "@/data/services";
import { MASTER_INSIGHTS } from "@/data/insights";
import { MASTER_PROPERTIES } from "@/data/properties";

// Everything the site can take you to, in one list.
//
// Built from the same data the pages render, so a new service, guide or
// property is searchable the moment it exists — there is no separate index to
// remember to update. It is small enough (a few dozen entries) to ship with the
// page and match in the browser; no search service, no network round trip.

export type ResultKind = "page" | "service" | "guide" | "property";

export interface SearchEntry {
  id: string;
  kind: ResultKind;
  title: string;
  /** One line under the title, to tell near-identical results apart. */
  detail: string;
  href: string;
  /** Extra words that should match but need not be displayed. */
  keywords: string;
}

const PAGES: Omit<SearchEntry, "kind" | "id">[] = [
  {
    title: "Home",
    detail: "Market entry, operations and investment across the Kingdom",
    href: "/",
    keywords: "vision saudi start overview",
  },
  {
    title: "About",
    detail: "Who we are and how we work",
    href: "/about",
    keywords: "team company story principles values",
  },
  {
    title: "Experience",
    detail: "Delivered projects and track record",
    href: "/experience",
    keywords: "track record case studies projects clients slnee government",
  },
  {
    title: "Partners",
    detail: "Strategic partnerships and the authorities we work with",
    href: "/partners",
    keywords: "partnerships ministries slnee ecosystem authorities",
  },
  {
    title: "Guides & Briefings",
    detail: "Working notes on entry, ownership, property and residency",
    href: "/insights",
    keywords: "insights articles research library reading",
  },
  {
    title: "Contact",
    detail: "Talk to a strategist in Riyadh",
    href: "/contact",
    keywords: "enquire email phone whatsapp get in touch office address",
  },
  {
    title: "Market Entry Estimator",
    detail: "Indicative timeline and roadmap for your entity",
    href: "/#estimator",
    keywords: "how long timeline weeks calculator estimate llc branch rhq documents checklist",
  },
  {
    title: "Privacy Policy",
    detail: "How we handle personal data under PDPL",
    href: "/privacy",
    keywords: "pdpl data protection cookies gdpr",
  },
  {
    title: "Terms",
    detail: "Terms of use",
    href: "/terms",
    keywords: "legal conditions",
  },
];

export const SEARCH_INDEX: SearchEntry[] = [
  ...PAGES.map((p, i) => ({ ...p, kind: "page" as const, id: `page-${i}` })),

  ...MASTER_SERVICES.map((s) => ({
    id: `service-${s.slug}`,
    kind: "service" as const,
    title: s.title,
    detail: s.tagline,
    href: `/services/${s.slug}`,
    // People search for the thing they need done — "MISA licence", "GOSI",
    // "Nitaqat" — and those words live in the detail, not the pillar's name.
    keywords: [
      s.summary,
      s.heroHeadline,
      s.journeyStage,
      ...s.capabilities.flatMap((c) => [c.title, c.description, ...c.details]),
      ...s.processSteps.flatMap((p) => [p.name, p.description]),
      ...s.postEstablishmentEcosystem,
      ...s.faqs.flatMap((q) => [q.question, q.answer]),
    ].join(" "),
  })),

  ...MASTER_INSIGHTS.map((a) => ({
    id: `guide-${a.slug}`,
    kind: "guide" as const,
    title: a.title,
    detail: `${a.category} · ${a.readTime}`,
    href: `/insights/${a.slug}`,
    keywords: a.excerpt,
  })),

  ...MASTER_PROPERTIES.map((p) => ({
    id: `property-${p.id}`,
    kind: "property" as const,
    title: p.title,
    detail: `${p.location} · ${p.type} · ${p.price}`,
    // There are no per-property pages, so land on the grid rather than the top
    // of a long page the visitor then has to scroll.
    href: "/services/real-estate#properties-showcase",
    keywords: [p.description, p.status, ...p.highlights].join(" "),
  })),
];

export const KIND_LABEL: Record<ResultKind, string> = {
  page: "Pages",
  service: "Services",
  guide: "Guides",
  property: "Properties",
};

const normalise = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

/**
 * Rank entries against a query. Every word must appear somewhere, so "riyadh
 * office" doesn't return everything mentioning Riyadh; a word in the title
 * counts for far more than one buried in the keywords, and a title that starts
 * with the query wins outright.
 */
/** Most results of any one kind, so fourteen properties can't bury a service. */
const PER_KIND = 4;

export function search(query: string, limit = 8): SearchEntry[] {
  const words = normalise(query).split(" ").filter(Boolean);
  if (words.length === 0) return [];

  const scored: { entry: SearchEntry; score: number }[] = [];

  for (const entry of SEARCH_INDEX) {
    const title = normalise(entry.title);
    const detail = normalise(entry.detail);
    const keywords = normalise(entry.keywords);
    let score = 0;
    let matchedAll = true;

    for (const word of words) {
      if (title.startsWith(word)) score += 12;
      else if (title.includes(word)) score += 8;
      else if (detail.includes(word)) score += 4;
      else if (keywords.includes(word)) score += 2;
      else {
        matchedAll = false;
        break;
      }
    }

    if (!matchedAll) continue;
    // A short title matching is a more precise hit than a long one.
    score += Math.max(0, 40 - title.length) / 40;
    scored.push({ entry, score });
  }

  const perKind = new Map<ResultKind, number>();

  return scored
    .sort((a, b) => b.score - a.score)
    .filter(({ entry }) => {
      const used = perKind.get(entry.kind) ?? 0;
      if (used >= PER_KIND) return false;
      perKind.set(entry.kind, used + 1);
      return true;
    })
    .slice(0, limit)
    .map((s) => s.entry);
}
