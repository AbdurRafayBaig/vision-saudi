import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Guides & Briefings",
  description: "Working guides on Saudi market entry, foreign ownership, real estate and Premium Residency, written by the team that files the paperwork.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Guides & Briefings | Vision Saudi",
    description: "Working guides on Saudi market entry, foreign ownership, real estate and Premium Residency, written by the team that files the paperwork.",
    url: "/insights",
  },
};

export default function Page() {
  return <PageClient />;
}
