import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Business Setup & Market Entry",
  description: "MISA licensing, Commercial Registration, capital transfer, and corporate bank account setup for entering the Saudi market.",
  alternates: { canonical: "/services/business-setup" },
  openGraph: {
    title: "Business Setup & Market Entry | Vision Saudi",
    description: "MISA licensing, Commercial Registration, capital transfer, and corporate bank account setup for entering the Saudi market.",
    url: "/services/business-setup",
  },
};

export default function Page() {
  return <PageClient />;
}
