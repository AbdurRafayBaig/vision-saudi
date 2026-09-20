import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "About",
  description: "Vision Saudi connects global enterprise, investors, and founders to the wider Saudi ecosystem.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Vision Saudi",
    description: "Vision Saudi connects global enterprise, investors, and founders to the wider Saudi ecosystem.",
    url: "/about",
  },
};

export default function Page() {
  return <PageClient />;
}
