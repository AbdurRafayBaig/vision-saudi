import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Ecosystem Partners",
  description: "The institutions, authorities, and delivery partners behind Vision Saudi's Kingdom-wide ecosystem.",
  alternates: { canonical: "/partners" },
  openGraph: {
    title: "Ecosystem Partners | Vision Saudi",
    description: "The institutions, authorities, and delivery partners behind Vision Saudi's Kingdom-wide ecosystem.",
    url: "/partners",
  },
};

export default function Page() {
  return <PageClient />;
}
