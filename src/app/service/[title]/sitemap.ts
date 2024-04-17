import { SERVICES } from "@/constants/services";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = process.env.DOMAIN as string;
  return SERVICES.map(({ title }) => ({
    url: `${domain}/service/${title}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));
}
