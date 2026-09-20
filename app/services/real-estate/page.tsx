import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Commercial Real Estate",
  description: "Strategic real estate advisory across Riyadh, Jeddah, Makkah, and Madinah — Grade-A headquarters to residential investment portfolios.",
  alternates: { canonical: "/services/real-estate" },
  openGraph: {
    title: "Commercial Real Estate | Vision Saudi",
    description: "Strategic real estate advisory across Riyadh, Jeddah, Makkah, and Madinah — Grade-A headquarters to residential investment portfolios.",
    url: "/services/real-estate",
  },
};

export default function Page() {
  return <PageClient />;
}
