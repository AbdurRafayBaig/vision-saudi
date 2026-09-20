import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "Vision Saudi connects global enterprise, investors, and founders to the wider Saudi ecosystem.",
  path: "/about",
});

export default function Page() {
  return <PageClient />;
}
