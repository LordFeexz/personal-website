import type { Lang } from "@/interfaces";
import { loadBlogMdx, type MdxFiles } from "@/libs/mdx";
import type { StaticImageData } from "next/image";
import CONTROLFLOW from "@/components/images/control-flow.jpg";
import NEXTJS from "@/components/images/nextjs.webp";
import BUNVSNODE from "@/components/images/Bun-Node.png";
import RANSOMWARE from "@/components/images/Ransomware.jpg";
import REMIX from "@/components/images/remix.jpg";
import PUREFUNCTION from "@/components/images/pure-function.png";
import FETCHANDAXIOS from "@/components/images/fetch-vs-axios.jpg";
import STATUS200 from "@/components/images/200.jpeg";
import CURRYINGFUNCTION from "@/components/images/curry-func.png";
import DBLOCK from "@/components/images/db-lock.jpg";

export interface BlogData {
  slug: string;
  file: MdxFiles;
  name: string;
  image: StaticImageData;
  keywords: string[];
}

export const BLOG_DATAS: Record<Lang, BlogData[]> = {
  en: [
    {
      file: loadBlogMdx("en", "database-lock") as MdxFiles,
      image: DBLOCK,
      name: "Database Lock",
      slug: "database-lock",
      keywords: [
        "database lock",
        "database",
        "database-lock",
        "database-locks",
        "database-locking",
        "database-locks",
        "database-locks",
      ],
    },
    {
      file: loadBlogMdx("en", "currying-func") as MdxFiles,
      image: CURRYINGFUNCTION,
      name: "Currying Function",
      slug: "currying-function",
      keywords: ["currying", "functional-programming", "function-composition"],
    },
    {
      file: loadBlogMdx("en", "status-code-always-200") as MdxFiles,
      image: STATUS200,
      name: "status code always 200?",
      slug: "status-code-always-200",
      keywords: [
        "status code",
        "200",
        "error code",
        "error",
        "http-status-code",
        "error-handling",
        "error-handling-in-node-js",
      ],
    },
    {
      file: loadBlogMdx("en", "axios-fetch") as MdxFiles,
      image: FETCHANDAXIOS,
      name: "Axios vs Fetch",
      slug: "axios-vs-fetch",
      keywords: [
        "axios",
        "fetch",
        "api",
        "api-call",
        "api-calls",
        "api-requests",
        "api-request",
      ],
    },
    {
      file: loadBlogMdx("en", "pure-function") as MdxFiles,
      image: PUREFUNCTION,
      name: "Pure Function",
      slug: "pure-function",
      keywords: [
        "pure",
        "function",
        "immutable",
        "purely",
        "purely-functional",
        "functional",
        "functional-programming",
        "purely-functional-programming",
      ],
    },
    {
      file: loadBlogMdx("en", "chatgpt-use-remix") as MdxFiles,
      image: REMIX,
      name: "ChatGPT now use Remix JS instead of Next JS?",
      slug: "chatgpt-use-remix-instead-of-next-js",
      keywords: ["chatgpt", "remix", "next", "migrate"],
    },
    {
      file: loadBlogMdx("en", "control-flow") as MdxFiles,
      slug: "control-flow-in-programming",
      name: "Control Flow",
      image: CONTROLFLOW,
      keywords: [
        "Branching",
        "Looping",
        "control",
        "flow",
        "Sequential processing",
      ],
    },
    {
      file: loadBlogMdx("en", "rendering-in-next-js") as MdxFiles,
      slug: "rendering-in-next-js-application",
      name: "Rendering in Next JS Application",
      image: NEXTJS,
      keywords: ["ssg", "ssr", "isr", "csr", "ppr", "next js", "rendering"],
    },
    {
      file: loadBlogMdx("en", "node-vs-bun") as MdxFiles,
      image: BUNVSNODE,
      slug: "node-vs-bun",
      name: "Node JS vs Bun JS, Which better?",
      keywords: ["Node", "Bun", "test", "load", "load test"],
    },
    {
      file: loadBlogMdx("en", "xampp-prod") as MdxFiles,
      image: RANSOMWARE,
      slug: "using-xampp-on-production",
      name: "XAMPP on Production?",
      keywords: [
        "xampp",
        "security",
        "performance",
        "scalability",
        "apache",
        "mysql",
        "php",
        "perl",
        "apache http server",
        "nginx",
      ],
    },
  ],
  id: [
    {
      file: loadBlogMdx("id", "database-lock") as MdxFiles,
      image: DBLOCK,
      name: "Database Lock",
      slug: "database-lock",
      keywords: [
        "database lock",
        "database",
        "database-lock",
        "database-locks",
        "database-locking",
        "database-locks",
        "database-locks",
      ],
    },
    {
      file: loadBlogMdx("id", "currying-func") as MdxFiles,
      image: CURRYINGFUNCTION,
      name: "Fungsi Curry",
      slug: "currying-function",
      keywords: ["currying", "functional-programming", "function-composition"],
    },
    {
      file: loadBlogMdx("id", "status-code-always-200") as MdxFiles,
      image: STATUS200,
      name: "status code selalu 200?",
      slug: "status-code-selalu-200",
      keywords: [
        "status code",
        "200",
        "error code",
        "error",
        "http-status-code",
        "error-handling",
        "error-handling-in-node-js",
      ],
    },
    {
      file: loadBlogMdx("id", "axios-fetch") as MdxFiles,
      image: FETCHANDAXIOS,
      name: "Axios vs Fetch",
      slug: "axios-vs-fetch",
      keywords: [
        "axios",
        "fetch",
        "api",
        "api-call",
        "api-calls",
        "api-requests",
        "api-request",
      ],
    },
    {
      file: loadBlogMdx("id", "pure-function") as MdxFiles,
      image: PUREFUNCTION,
      name: "Pure Function",
      slug: "pure-function",
      keywords: [
        "pure",
        "function",
        "immutable",
        "purely",
        "purely-functional",
        "functional",
        "functional-programming",
        "purely-functional-programming",
      ],
    },
    {
      file: loadBlogMdx("id", "chatgpt-pakai-remix") as MdxFiles,
      image: REMIX,
      name: "ChatGPT sekarang pakai Remix JS daripada Next JS?",
      slug: "chatgpt-sekarang-pakai-remix-daripada-next",
      keywords: ["chatgpt", "remix", "next", "migrasi"],
    },
    {
      file: loadBlogMdx("id", "kontrol-alur") as MdxFiles,
      slug: "mengatur-flow-dalam-pemprograman",
      name: "Mengatur Flow",
      image: CONTROLFLOW,
      keywords: [
        "Percabangan",
        "Perulangan",
        "Pemrosesan Berurutan",
        "alur",
        "kontrol",
      ],
    },
    {
      file: loadBlogMdx("id", "rendering-di-next-js") as MdxFiles,
      image: NEXTJS,
      slug: "rendering-di-aplikasi-next-js",
      name: "Rendering di Aplikasi Next JS",
      keywords: ["ssg", "ssr", "isr", "csr", "ppr", "next js", "rendering"],
    },
    {
      file: loadBlogMdx("id", "node-vs-bun") as MdxFiles,
      image: BUNVSNODE,
      slug: "node-vs-bun",
      name: "Node JS vs Bun JS, Mana yang lebih baik?",
      keywords: ["Node", "Bun", "test", "load", "load test"],
    },
    {
      file: loadBlogMdx("id", "xampp-prod") as MdxFiles,
      image: RANSOMWARE,
      slug: "pakai-xampp-di-production",
      name: "XAMPP di Production?",
      keywords: [
        "xampp",
        "security",
        "performance",
        "scalability",
        "apache",
        "mysql",
        "php",
        "perl",
        "apache http server",
        "nginx",
      ],
    },
  ],
};
