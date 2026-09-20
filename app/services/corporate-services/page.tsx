import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Corporate Services & GRO",
  description: "Ongoing GRO, compliance, payroll, and government-relations support that keeps your Saudi entity operating.",
  alternates: { canonical: "/services/corporate-services" },
  openGraph: {
    title: "Corporate Services & GRO | Vision Saudi",
    description: "Ongoing GRO, compliance, payroll, and government-relations support that keeps your Saudi entity operating.",
    url: "/services/corporate-services",
  },
};

export default function Page() {
  return <PageClient />;
}
