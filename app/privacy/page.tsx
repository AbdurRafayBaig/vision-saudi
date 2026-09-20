import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  ...pageMetadata({ title: "Privacy Policy", description: "How Vision Saudi protects confidential client disclosures and personal data in accordance with KSA law.", path: "/privacy" }),
  // Legal boilerplate carries no search intent; kept crawlable so the
  // links out of it still pass, but out of the index.
  robots: { index: false, follow: true },
};

export default function Page() {
  return <PageClient />;
}
