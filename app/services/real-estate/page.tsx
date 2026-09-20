import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqLd, serviceLd } from "@/lib/schema";
import { MASTER_SERVICES } from "@/data/services";
import PageClient from "./PageClient";

export const metadata: Metadata = pageMetadata({
  title: "Commercial Real Estate",
  description: "Strategic real estate advisory across Riyadh, Jeddah, Makkah, and Madinah — Grade-A headquarters to residential investment portfolios.",
  path: "/services/real-estate",
});

const service = MASTER_SERVICES.find((s) => s.slug === "real-estate")!;

export default function Page() {
  return (
    <>
      {/* Marked up from the same data the page renders, so the answers Google
          shows are the answers actually on the page. */}
      <JsonLd data={[serviceLd(service), faqLd(service.faqs)]} />
      <PageClient />
    </>
  );
}
