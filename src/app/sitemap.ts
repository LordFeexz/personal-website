import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = process.env.DOMAIN as string;
  return [
    {
      url: domain,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${domain}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${domain}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 2,
    },
    {
      url: `${domain}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 2,
    },
  ];
}
