import Breakline from "@/components/atoms/contents/breakLine";
import Container from "@/components/atoms/contents/container";
import Introduction from "@/components/molleculs/contents/introduction";
import CareerList from "@/components/organs/contents/careerList";
import TechList from "@/components/organs/contents/techList";
import { CAREER } from "@/constants/career";

export default function Page() {
  return (
    <Container data-aos="fade-left">
      <Introduction />
      <Breakline className="my-6" />
      <CareerList careers={CAREER} />
      <Breakline className="my-6" />
      <TechList />
      <Breakline className="my-6" />
    </Container>
  );
}
