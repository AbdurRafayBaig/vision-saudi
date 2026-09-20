import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Speak with Vision Saudi's senior market-entry strategists about establishment, investment, real estate, or corporate services.",
  path: "/contact",
});

export default function Page() {
  return <PageClient />;
}
