import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqLd, serviceLd } from "@/lib/schema";
import { MASTER_SERVICES } from "@/data/services";
import PageClient from "./PageClient";

export const metadata: Metadata = pageMetadata({
  title: "Technology & Digital Infrastructure",
  description: "Enterprise technology, digital platforms, and infrastructure delivery for organisations scaling inside Saudi Arabia.",
  path: "/services/technology-infrastructure",
});

const service = MASTER_SERVICES.find((s) => s.slug === "technology-infrastructure")!;

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
