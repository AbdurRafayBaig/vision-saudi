import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://visionsaudi.com";

  return [
    { url: `${baseUrl}`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/services/business-setup`, lastModified: new Date() },
    { url: `${baseUrl}/services/corporate-services`, lastModified: new Date() },
    { url: `${baseUrl}/services/technology-infrastructure`, lastModified: new Date() },
    { url: `${baseUrl}/services/real-estate`, lastModified: new Date() },
    { url: `${baseUrl}/services/premium-residency`, lastModified: new Date() },
    { url: `${baseUrl}/experience`, lastModified: new Date() },
    { url: `${baseUrl}/partners`, lastModified: new Date() },
    { url: `${baseUrl}/insights`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/privacy`, lastModified: new Date() },
    { url: `${baseUrl}/terms`, lastModified: new Date() },
  ];
}
