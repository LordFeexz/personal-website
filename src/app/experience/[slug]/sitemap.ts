import { CAREER } from "@/constants/career";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = process.env.DOMAIN as string;
  return CAREER.map((el) => ({
    url: `${domain}/experience/${el.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 3,
  }));
}
