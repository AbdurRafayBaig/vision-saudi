import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-config";
import { lastModified } from "@/lib/last-modified";

// /privacy and /terms are deliberately absent: they are noindex, and listing a
// noindex URL in the sitemap sends search engines contradictory signals.
// `sources` lists files a page is built from beyond its own folder, so a data
// edit moves the date even when the component didn't change.
const ROUTES: {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly";
  sources?: string[];
}[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly", sources: ["components/sections", "data/services.ts"] },
  { path: "/services", priority: 0.9, changeFrequency: "monthly", sources: ["data/services.ts"] },
  { path: "/services/business-setup", priority: 0.9, changeFrequency: "monthly", sources: ["data/services.ts"] },
  { path: "/services/corporate-services", priority: 0.8, changeFrequency: "monthly", sources: ["data/services.ts"] },
  { path: "/services/technology-infrastructure", priority: 0.8, changeFrequency: "monthly", sources: ["data/services.ts"] },
  { path: "/services/real-estate", priority: 0.8, changeFrequency: "weekly", sources: ["data/services.ts", "data/properties.ts"] },
  { path: "/services/premium-residency", priority: 0.8, changeFrequency: "monthly", sources: ["data/services.ts"] },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...ROUTES.map(({ path, priority, changeFrequency, sources }) => ({
      url: absoluteUrl(path),
      lastModified: lastModified(path, sources),
      changeFrequency,
      priority,
    })),
  ];
}
