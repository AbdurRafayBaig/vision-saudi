import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = pageMetadata({
  title: "Ecosystem Partners",
  description: "The institutions, authorities, and delivery partners behind Vision Saudi's Kingdom-wide ecosystem.",
  path: "/partners",
});

export default function Page() {
  return <PageClient />;
}
