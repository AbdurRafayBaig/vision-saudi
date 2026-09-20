import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Saudi Premium Residency",
  description: "Premium Residency and visa pathways for investors, founders, and senior talent relocating to Saudi Arabia.",
  alternates: { canonical: "/services/premium-residency" },
  openGraph: {
    title: "Saudi Premium Residency | Vision Saudi",
    description: "Premium Residency and visa pathways for investors, founders, and senior talent relocating to Saudi Arabia.",
    url: "/services/premium-residency",
  },
};

export default function Page() {
  return <PageClient />;
}
