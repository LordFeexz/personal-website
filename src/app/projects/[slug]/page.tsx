import Container from "@/components/atoms/contents/container";
import PageHeading from "@/components/atoms/header/pageHeading";
import BackBtn from "@/components/molleculs/button/backBtn";
import ProjectDetail from "@/components/organs/contents/projectDetails";
import { PROJECTS } from "@/constants/projects";
import type { PageProps } from "@/interfaces";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export default function Page({ params }: PageProps<{ slug: string }>) {
  const data = PROJECTS.find((el) => el.slug === params?.slug);
  if (!data) notFound();

  return (
    <Container data-aos="fade-left">
      <BackBtn url="/projects" />
      <PageHeading title={data.title} desc={data.desc} />
      <ProjectDetail {...data} />
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
