import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Track Record",
  description: "Selected enterprise project experience attributed through strategic technology partner SLNEE.",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Track Record | Vision Saudi",
    description: "Selected enterprise project experience attributed through strategic technology partner SLNEE.",
    url: "/experience",
  },
};

export default function Page() {
  return <PageClient />;
}
