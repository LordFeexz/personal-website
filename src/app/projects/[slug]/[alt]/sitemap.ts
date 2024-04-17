import { PROJECTS } from "@/constants/projects";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = process.env.DOMAIN as string;
  const data: MetadataRoute.Sitemap = [];
  PROJECTS.forEach((el) => {
    el.imgs.forEach((val) => {
      data.push({
        url: `${domain}/projects/${el.slug}/${val.alt}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 3,
      });
    });
  });
  return data;
}
