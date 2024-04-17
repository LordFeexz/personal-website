import Container from "@/components/atoms/contents/container";
import PageHeading from "@/components/atoms/header/pageHeading";
import ProjectsList from "@/components/organs/contents/projectList";
import type { PageProps } from "@/interfaces";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ananda Fiqri Projects and portfolio",
  description: "My Projects showcase",
  keywords: "software developer project ideas",
};

export default function Page({
  searchParams,
}: PageProps<{}, { readMode?: string }>) {
  return (
    <Container
      data-aos="fade-left"
      as="section"
      readMode={searchParams?.readMode?.toLowerCase() === "true"}
    >
      <PageHeading title="My Projects" desc="my projects showcase" />
      <ProjectsList />
    </Container>
  );
}

export const dynamic = "force-static";
