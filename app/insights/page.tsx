import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Market Insights",
  description: "Perspective and research on Saudi Arabia's Vision 2030 transformation, regulation, and investment landscape.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Market Insights | Vision Saudi",
    description: "Perspective and research on Saudi Arabia's Vision 2030 transformation, regulation, and investment landscape.",
    url: "/insights",
  },
};

export default function Page() {
  return <PageClient />;
}
