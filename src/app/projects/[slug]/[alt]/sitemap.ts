import { PROJECTS } from "@/constants/projects";
import type { MyProjects } from "@/interfaces/projects";
import type { MetadataRoute } from "next";

export interface SitemapProps {
  slug: string;
}

export default function sitemap({ slug }: SitemapProps): MetadataRoute.Sitemap {
  const domain = process.env.DOMAIN as string;
  const alts = PROJECTS.find((el) => el.slug === slug) as MyProjects;
  return alts.imgs.map(({ alt }) => ({
    url: `${domain}/projects/${slug}/${alt}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 3,
  }));
}

export function generateSitemaps() {
  return PROJECTS.map(({ slug }) => ({ slug }));
}
