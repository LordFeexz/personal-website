import "server-only";
import { readFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";
import remarkParse from "remark-parse";
import type { Lang } from "@/interfaces";

export interface MdxFiles {
  name: string;
  frontMatter: Record<string, any>;
  content: string;
}

export default function loadMdxFiles(name: string): MdxFiles | null {
  try {
    const dirPath = join(
      process.cwd(),
      "src",
      "components",
      "md",
      name + ".mdx"
    );
    const source = readFileSync(dirPath, "utf-8");
    if (!source) return null;

    const { content, data } = matter(source);
    const mdxCompiler = remark().use(remarkParse).use(remarkGfm).use(remarkMdx);
    const mdxContent = mdxCompiler.processSync(content).toString();

    return {
      name,
      frontMatter: data,
      content: mdxContent,
    };
  } catch (err) {
    return null;
  }
}

export const loadBlogMdx = (lang: Lang, name: string) =>
  loadMdxFiles(`blog/${lang}/${name}`);
