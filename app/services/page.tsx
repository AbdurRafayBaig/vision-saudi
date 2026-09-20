import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Services",
  description: "MISA licensing, corporate services, technology infrastructure, commercial real estate, and Premium Residency — the full Vision Saudi capability set.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Vision Saudi",
    description: "MISA licensing, corporate services, technology infrastructure, commercial real estate, and Premium Residency — the full Vision Saudi capability set.",
    url: "/services",
  },
};

export default function Page() {
  return <PageClient />;
}
