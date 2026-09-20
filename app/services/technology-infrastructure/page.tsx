import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Technology & Digital Infrastructure",
  description: "Enterprise technology, digital platforms, and infrastructure delivery for organisations scaling inside Saudi Arabia.",
  alternates: { canonical: "/services/technology-infrastructure" },
  openGraph: {
    title: "Technology & Digital Infrastructure | Vision Saudi",
    description: "Enterprise technology, digital platforms, and infrastructure delivery for organisations scaling inside Saudi Arabia.",
    url: "/services/technology-infrastructure",
  },
};

export default function Page() {
  return <PageClient />;
}
