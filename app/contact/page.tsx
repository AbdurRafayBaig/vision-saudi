import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Speak with Vision Saudi's senior market-entry strategists about establishment, investment, real estate, or corporate services.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Vision Saudi",
    description: "Speak with Vision Saudi's senior market-entry strategists about establishment, investment, real estate, or corporate services.",
    url: "/contact",
  },
};

export default function Page() {
  return <PageClient />;
}
