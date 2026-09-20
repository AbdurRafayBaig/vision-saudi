import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = pageMetadata({
  title: "Guides & Briefings",
  description: "Working guides on Saudi market entry, foreign ownership, real estate and Premium Residency, written by the team that files the paperwork.",
  path: "/insights",
});

export default function Page() {
  return <PageClient />;
}
