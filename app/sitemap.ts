import type { MetadataRoute } from "next";
import { MASTER_INSIGHTS } from "@/data/insights";
import { absoluteUrl } from "@/lib/site-config";

// /privacy and /terms are deliberately absent: they are noindex, and listing a
// noindex URL in the sitemap sends search engines contradictory signals.
const ROUTES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/business-setup", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/corporate-services", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/technology-infrastructure", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/real-estate", priority: 0.8, changeFrequency: "weekly" },
  { path: "/services/premium-residency", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/experience", priority: 0.6, changeFrequency: "monthly" },
  { path: "/partners", priority: 0.6, changeFrequency: "monthly" },
  { path: "/insights", priority: 0.7, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...ROUTES.map(({ path, priority, changeFrequency }) => ({
      url: absoluteUrl(path),
      changeFrequency,
      priority,
    })),
    ...MASTER_INSIGHTS.map((article) => ({
      url: absoluteUrl(`/insights/${article.slug}`),
      lastModified: new Date(article.publishedISO),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
