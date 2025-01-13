import Container from "@/components/atoms/contents/container";
import PageHeading from "@/components/atoms/header/pageHeading";
import BackBtn from "@/components/molleculs/button/backBtn";
import ProjectDetail from "@/components/organs/contents/projectDetails";
import { PROJECTS } from "@/constants/projects";
import type { PageProps } from "@/interfaces";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Meteors } from "@/components/ui/meteors";
import Timeline from "@/components/ui/timeline";

export default function Page({
  params,
  searchParams,
}: PageProps<{ slug: string }, { readMode?: string }>) {
  const data = PROJECTS.find((el) => el.slug === params?.slug);
  if (!data) notFound();

  return (
    <Container
      data-aos="fade-left"
      as="section"
      readMode={searchParams?.readMode?.toLowerCase() === "true"}
    >
      <Meteors number={20} />
      <BackBtn url="/projects" />
      <PageHeading title={data.title} desc={data.desc} />
      <ProjectDetail {...data} />
      {data.timelines && (
        <Timeline
          title={data.timelines.title}
          desc={data.timelines.desc}
          datas={data.timelines.datas}
        />
      )}
    </Container>
  );
}

export function generateMetadata({
  params,
}: PageProps<{ slug: string }>): Metadata {
  const data = PROJECTS.find((el) => el.slug === params?.slug);
  return !!data
    ? {
        title: data.title,
        description: data.desc,
        keywords: data.title,
        alternates: {
          canonical: `${process.env.DOMAIN}/projects/${data.slug}`,
        },
      }
    : {};
}

export async function generateStaticParams() {
  return PROJECTS.map(({ slug }) => ({ slug }));
}

export const dynamic = "force-static";
