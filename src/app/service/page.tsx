import Container from "@/components/atoms/contents/container";
import PageHeading from "@/components/atoms/header/pageHeading";
import ServicesPage from "@/components/organs/contents/services";
import { Meteors } from "@/components/ui/meteors";
import type { PageProps } from "@/interfaces";
import type { Metadata } from "next";

export default function Page({
  searchParams,
}: PageProps<{}, { readMode?: string }>) {
  return (
    <Container
      data-aos="fade-left"
      readMode={searchParams?.readMode?.toLowerCase() === "true"}
    >
      <Meteors number={20} />
      <PageHeading title="My Services" desc="What i can do for you" />
      <ServicesPage />
    </Container>
  );
}

export const metadata: Metadata = {
  title: "Ananda Fiqri Services",
  description: "My Services showcase",
  keywords:
    "services, mentoring, learn, development, web development, software development",
};

export const dynamic = "force-static";
