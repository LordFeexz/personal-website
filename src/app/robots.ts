import { CAREER } from "@/constants/career";
import { PROJECTS } from "@/constants/projects";
import { SERVICES } from "@/constants/services";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const domain = process.env.DOMAIN as string;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/*"],
    },
    sitemap: [
      `${domain}/sitemap.xml`,
      ...SERVICES.map(({ title }) => `${domain}/service/${title}/sitemap.xml`),
      ...PROJECTS.map(({ slug }) => `${domain}/projects/${slug}/sitemap.xml`),
      ...PROJECTS.map(({ slug, imgs }) =>
        imgs.map(({ alt }) => `${domain}/projects/${slug}/${alt}/sitemap.xml`)
      ).flat(),
      ...CAREER.map(({ slug }) => `${domain}/experience/${slug}/sitemap.xml`),
      ...["en", "id"].map((lang) => `${domain}/${lang}/sitemap.xml`),
    ],
    host: domain,
  };
}
