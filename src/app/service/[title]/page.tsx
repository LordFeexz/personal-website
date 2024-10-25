import Container from "@/components/atoms/contents/container";
import PageHeading from "@/components/atoms/header/pageHeading";
import UseMdxComponent from "@/app/mdx-components";
import { SERVICES } from "@/constants/services";
import type { PageProps } from "@/interfaces";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import loadMdxFiles from "@/libs/mdx";
import BackBtn from "@/components/molleculs/button/backBtn";
import Image from "next/image";
import Breakline from "@/components/atoms/contents/breakLine";
import { Meteors } from "@/components/ui/meteors";

export type ServicePageTitleProps = PageProps<
  { title: string },
  { readMode?: string }
>;

export default function Page({
  params: { title },
  searchParams,
}: ServicePageTitleProps) {
  const data = SERVICES.find((el) => el.title === title);
  if (!data) notFound();

  const mdFile = loadMdxFiles(title);
  if (!mdFile) notFound();

  return (
    <Container
      data-aos="fade-left"
      readMode={searchParams?.readMode?.toLowerCase() === "true"}
    >
      <Meteors number={20} />
      <BackBtn />
      <PageHeading title={data.title.replaceAll("-", " ")} desc={data.desc} />
      <figure className="flex justify-center items-center snap-center py-10 pr-5">
        <Image
          priority
          className="transition-all rounded-3xl duration-300 hover:scale-105 object-cover object-center"
          src={data.img}
          alt={data.title}
          width={400}
          height={200}
        />
      </figure>
      <Breakline className="sm:pr-11" />
      <section className="mt-5 space-y-6 leading-[1.8] dark:text-neutral-300">
        <UseMdxComponent>{mdFile.content as any}</UseMdxComponent>
      </section>
    </Container>
  );
}

export async function generateStaticParams() {
  return SERVICES.map(({ title }) => ({ title }));
}

export function generateMetadata({
  params: { title },
}: ServicePageTitleProps): Metadata {
  const data = SERVICES.find((el) => el.title === title);

  return !!data
    ? {
        title: data.title,
        description: data.desc,
        keywords: `${data.title}, ${data.tag}`,
        alternates: {
          canonical: `${process.env.DOMAIN}/service/${data.title}`,
        },
      }
    : {};
}
