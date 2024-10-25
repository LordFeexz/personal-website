import { BLOG_DATAS } from "@/constants/blog";
import type { Lang } from "@/interfaces";
import type { MetadataRoute } from "next";

export default function sitemap({
  lang,
}: {
  lang: Lang;
}): MetadataRoute.Sitemap {
  return BLOG_DATAS[lang].map((content) => ({
    url: `/blog/${lang}/${content.slug}`,
    lastModified: new Date(),
    changeFrequency: "never",
    priority: 3,
  }));
}
