import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://p27solver.com";

  return [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/product`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/pricing`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/download`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/docs`, changeFrequency: "weekly", priority: 0.7 },
    {
      url: `${siteUrl}/docs/getting-started`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${siteUrl}/about`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${siteUrl}/contact`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${siteUrl}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/imprint`, changeFrequency: "yearly", priority: 0.3 },
  ];
}

