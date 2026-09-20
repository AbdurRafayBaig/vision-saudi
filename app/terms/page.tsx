import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms governing use of the Vision Saudi advisory platform.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Terms & Conditions | Vision Saudi",
    description: "Terms governing use of the Vision Saudi advisory platform.",
    url: "/terms",
  },
};

export default function Page() {
  return <PageClient />;
}
