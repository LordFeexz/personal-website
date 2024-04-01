import Breakline from "@/components/atoms/contents/breakLine";
import CareerList from "@/components/organs/contents/careerList";
import { CAREER } from "@/constants/career";

export default function CareerSection() {
  return (
    <>
      <CareerList careers={CAREER} />
      <Breakline className="my-6" />
    </>
  );
}
