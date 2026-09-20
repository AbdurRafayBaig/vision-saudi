import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Vision Saudi protects confidential client disclosures and personal data in accordance with KSA law.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Privacy Policy | Vision Saudi",
    description: "How Vision Saudi protects confidential client disclosures and personal data in accordance with KSA law.",
    url: "/privacy",
  },
};

export default function Page() {
  return <PageClient />;
}
