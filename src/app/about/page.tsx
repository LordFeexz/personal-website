import Breakline from "@/components/atoms/contents/breakLine";
import Container from "@/components/atoms/contents/container";
import PageHeading from "@/components/atoms/header/pageHeading";
import AboutSummary from "@/components/organs/contents/about";

export default function Page() {
  return (
    <Container data-aos="fade-left" className="flex flex-col">
      <PageHeading title="About Me" desc="a little story about me" />
      <AboutSummary />
      <Breakline className="mt-8" />
    </Container>
  );
}
