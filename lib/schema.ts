import { SITE, absoluteUrl } from "@/lib/site-config";
import type { MASTER_SERVICES } from "@/data/services";

type Service = (typeof MASTER_SERVICES)[number];

/**
 * schema.org for a service pillar.
 *
 * Tied back to the organisation declared in the root layout by @id, so Google
 * reads one business offering five services rather than five unrelated pages.
 */
export function serviceLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl(`/services/${service.slug}#service`),
    name: service.title,
    description: service.summary,
    url: absoluteUrl(`/services/${service.slug}`),
    serviceType: service.tagline,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: { "@type": "Country", name: "Saudi Arabia" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} capabilities`,
      itemListElement: service.capabilities.map((c) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: c.title, description: c.description },
      })),
    },
  };
}

/**
 * The questions already answered on the page, marked up so they can win the
 * expandable FAQ block in search results. The copy is not duplicated — this
 * reads the same data the accordion renders, which is what Google requires:
 * the answer must be visible on the page.
 */
export function faqLd(faqs: Service["faqs"]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
