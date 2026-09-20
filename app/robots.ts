import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    // /guides/ holds the email-gated PDF; keep it out of search results.
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/guides/"] },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
