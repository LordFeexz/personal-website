import { PROJECTS } from "@/constants/projects";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = process.env.DOMAIN as string;
  return PROJECTS.map(({ slug }) => ({
    url: `${domain}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 3,
  }));
}
