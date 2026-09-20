import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-config";

/** The card every share falls back to when a page has no picture of its own. */
export const OG_DEFAULT = {
  url: "/images/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "Vision Saudi — market entry, operations and investment across the Kingdom",
};

interface PageSeo {
  /** Shown in the tab and as the SERP headline. The " | Vision Saudi" suffix is added by the layout. */
  title: string;
  description: string;
  /** Site-relative, no trailing slash — "/services/real-estate". */
  path: string;
  /** Overrides the default share card. Site-relative or absolute. */
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  section?: string;
}

/**
 * Builds a page's metadata with the share card always attached.
 *
 * Pages used to write `openGraph` by hand, and a nested `openGraph` object
 * replaces the parent's rather than merging into it — so every page except the
 * home page silently lost its og:image while still declaring
 * twitter:card=summary_large_image. Every LinkedIn and WhatsApp share of a
 * service page or an article rendered an empty card. Going through one builder
 * makes that impossible to forget again.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  section,
}: PageSeo): Metadata {
  const images = image ? [{ ...OG_DEFAULT, url: image }] : [OG_DEFAULT];

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      title: `${title} | Vision Saudi`,
      description,
      url: absoluteUrl(path),
      siteName: "Vision Saudi",
      locale: "en_US",
      images,
      ...(publishedTime ? { publishedTime } : {}),
      ...(section ? { section } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Vision Saudi`,
      description,
      images: images.map((i) => i.url),
    },
  };
}
