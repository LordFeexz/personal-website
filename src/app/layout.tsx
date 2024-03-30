import type { ChildrenProps } from "@/interfaces";
import MainLayout from "@/layouts/mainLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.DOMAIN || ""
  ),

  description: "Ananda Fiqri Software Engineer Personal Website and Blog",
  keywords:
    "typescript, nextjs, ananda fiqri, golang, python, rust, javascript, astro, vue",
  creator: "Ananda Fiqri",
  authors: {
    name: "Ananda Fiqri",
    url: process.env.DOMAIN,
  },
  openGraph: {
    url: process.env.DOMAIN,
    siteName: "Ananda Fiqri Website and Blog",
    locale: "id-ID",
  },
};

export default function RootLayout({ children }: ChildrenProps) {
  return <MainLayout>{children}</MainLayout>;
}
