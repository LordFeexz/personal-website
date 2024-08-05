import Breakline from "@/components/atoms/contents/breakLine";
import Container from "@/components/atoms/contents/container";
import PageHeading from "@/components/atoms/header/pageHeading";
import AboutSummary from "@/components/organs/contents/about";
import { Meteors } from "@/components/ui/meteors";
import type { PageProps } from "@/interfaces";

export default function Page({
  searchParams,
}: PageProps<{}, { readMode?: string }>) {
  return (
    <Container
      data-aos="fade-left"
      className="flex flex-col"
      readMode={searchParams?.readMode?.toLowerCase() === "true"}
    >
      <Meteors number={20} />
      <PageHeading title="About Me" desc="a little story about me" />
      <AboutSummary />
      <Breakline className="mt-8" />
    </Container>
  );
}

export const dynamic = "force-static";
