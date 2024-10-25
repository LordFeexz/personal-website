import UseMdxComponent from "@/app/mdx-components";
import Container from "@/components/atoms/contents/container";
import PageHeading from "@/components/atoms/header/pageHeading";
import BackBtn from "@/components/molleculs/button/backBtn";
import { Meteors } from "@/components/ui/meteors";
import { BLOG_DATAS } from "@/constants/blog";
import type { Lang, PageProps } from "@/interfaces";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function Page({
  params: { lang, slug },
  searchParams,
}: PageProps<{ lang: Lang; slug: string }>) {
  if (!["en", "id"].includes(lang)) notFound();

  const data = BLOG_DATAS[lang].find((el) => el.slug === slug);
  if (!data) notFound();

  return (
    <Container
      readMode={searchParams?.readMode?.toLowerCase() === "true"}
      data-aos="zoom-in-out"
      data-aos-duration="300"
    >
      <Meteors number={10} />
      <BackBtn />

      <PageHeading title={data.name} capitalize />
      <figure className="flex justify-center items-center snap-center py-10 pr-5">
        <Image
          priority
          className="transition-all rounded-3xl duration-300 hover:scale-105 object-cover object-center"
          src={data.image}
          alt={data.name}
          width={400}
          height={200}
        />
      </figure>
      <section className="mt-5 space-y-6 leading-[1.8] dark:text-neutral-300">
        <UseMdxComponent>{data?.file?.content as any}</UseMdxComponent>
      </section>
    </Container>
  );
}

export const dynamic = "force-static";

export function generateStaticParams() {
  const params = [];

  for (const lang in BLOG_DATAS) {
    const blogEntries = BLOG_DATAS[lang as Lang];

    for (const entry of blogEntries)
      params.push({
        lang: lang,
        slug: entry.slug,
      });
  }

  return params;
}

export function generateMetadata({
  params: { lang, slug },
}: PageProps<{ lang: Lang; slug: string }>): Metadata {
  const data = BLOG_DATAS[lang].find((el) => el.slug === slug);
  if (!data) notFound();

  return {
    title: data.name,
    icons: data.image.src,
    description: `Read more about ${data.name}`,
    authors: {
      name: "Ananda Fiqri",
      url: process.env.DOMAIN,
    },
    openGraph: {
      url: process.env.DOMAIN,
      siteName: "Ananda Fiqri Website and Blog",
      locale: lang === "id" ? "id-ID" : "en-US",
    },
    creator: "Ananda Fiqri",
    keywords: data.keywords,
  };
}
