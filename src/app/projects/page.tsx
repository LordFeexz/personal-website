import Container from "@/components/atoms/contents/container";
import PageHeading from "@/components/atoms/header/pageHeading";
import ProjectsList from "@/components/organs/contents/projectList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ananda Fiqri Projects and portfolio",
  description: "My Projects showcase",
  keywords: "software developer project ideas",
};

export default function Page() {
  return (
    <Container data-aos="fade-left">
      <PageHeading title="My Projects" desc="my projects showcase" />
      <ProjectsList />
    </Container>
  );
}
