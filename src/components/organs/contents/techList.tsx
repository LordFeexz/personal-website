import TechCard from "@/components/molleculs/card/techCard";
import MarqueeElement from "@/components/atoms/contents/marquee";
import { memo, type ReactNode } from "react";
import { HiCode } from "@/components/atoms/icons/react-icons-hi";
import SectionHeading from "@/components/atoms/header/sectionHeading";
import SubSectionHeading from "@/components/atoms/header/subSectionHeading";
import { TECHSTACKS } from "@/constants/stacks";

function TechList() {
  const stacks: Array<[string, ReactNode]> = Object.entries(TECHSTACKS).sort(
    () => Math.random() - 0.5
  );

  return (
    <section className="space-y-6 mb-16 container mx-auto my-auto" id="tech">
      <header className="space-y-2 -z-40">
        <SectionHeading title="Skills" icon={<HiCode className="mr-1" />} />
        <SubSectionHeading>
          <p className="dark:text-neutral-400">My TechStacks</p>
        </SubSectionHeading>
      </header>

      <div className="flex flex-col space-y-8 overflow-x-hidden overflow-y-visible">
        {Array.from({ length: 2 }, (_, idx) => (
          <MarqueeElement
            key={idx}
            direction={idx % 2 === 0 ? "left" : "right"}
            withPadding
          >
            {[...stacks]
              .sort(() => Math.random() - 0.5)
              .map(([name, icon]) => (
                <TechCard name={name} svg={icon} key={name} />
              ))}
          </MarqueeElement>
        ))}
      </div>
    </section>
  );
}

export default memo(TechList);
