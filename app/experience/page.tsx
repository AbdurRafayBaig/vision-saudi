import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = pageMetadata({
  title: "Track Record",
  description: "Selected enterprise project experience attributed through strategic technology partner SLNEE.",
  path: "/experience",
});

export default function Page() {
  return <PageClient />;
}
