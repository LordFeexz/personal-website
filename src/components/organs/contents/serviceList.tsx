import SectionHeading from "@/components/atoms/header/sectionHeading";
import ServiceCard from "@/components/organs/card/serviceCard";
import { FaServicestack } from "@/components/atoms/icons/react-icons-fa";
import SubSectionHeading from "@/components/atoms/header/subSectionHeading";
import { SERVICES } from "@/constants/services";

export default function ServicesList() {
  return (
    <section>
      <header className="space-y-2">
        <SectionHeading
          title="Services"
          icon={<FaServicestack className="mr-1" size={20} />}
        />
        <SubSectionHeading>
          <p className="dark:text-neutral-400">
            Services that i can provide for you
          </p>
        </SubSectionHeading>
      </header>
      <article className="no-scrollbar mt-6 flex flex-row space-x-3 overflow-y-hidden overflow-x-scroll">
        {SERVICES.map((el) => (
          <ServiceCard {...el} key={el.title} />
        ))}
      </article>
    </section>
  );
}
