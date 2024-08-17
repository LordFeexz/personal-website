import SectionHeading from "@/components/atoms/header/sectionHeading";
import CareerCard, { type CareerCardProps } from "../card/careerCard";
import { HiOutlineBriefcase } from "@/components/atoms/icons/react-icons-hi";
import SubSectionHeading from "@/components/atoms/header/subSectionHeading";
import ResumeBtn from "@/components/molleculs/button/resumeBtn";
import { memo } from "react";

export interface CareerListProps {
  careers: CareerCardProps[];
}

function CareerList({ careers }: CareerListProps) {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <hgroup>
          <SectionHeading title="careers" icon={<HiOutlineBriefcase />} />
          <SubSectionHeading>
            <p className="dark:text-neutral-400">My Working experiences</p>
            <ResumeBtn />
          </SubSectionHeading>
        </hgroup>
      </header>
      <div className="no-scrollbar mt-6 flex h-36 flex-row space-x-3 overflow-y-hidden overflow-x-scroll">
        {careers?.map((el) => (
          <CareerCard key={el.company} {...el} />
        ))}
      </div>
    </section>
  );
}

export default memo(CareerList);
