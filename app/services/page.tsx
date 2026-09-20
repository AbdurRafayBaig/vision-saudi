import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description: "MISA licensing, corporate services, technology infrastructure, commercial real estate, and Premium Residency — the full Vision Saudi capability set.",
  path: "/services",
});

export default function Page() {
  return <PageClient />;
}
