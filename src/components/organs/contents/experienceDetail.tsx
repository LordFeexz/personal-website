import { format } from "date-fns";
import LazyLoadImg from "@/components/atoms/image/lazyLoadImg";
import type { CareerCardProps } from "../card/careerCard";
import { BsBuilding } from "@/components/atoms/icons/react-icons-bs";
import PointText from "@/components/molleculs/contents/pointText";

export interface ExperienceDetailProps extends CareerCardProps {
  responsibility?: string[];
}

export default function ExperienceDetail({
  position,
  company,
  logo,
  startDate,
  endDate,
  responsibility,
}: ExperienceDetailProps) {
  const start_date = new Date(startDate);
  const end_date = endDate ? new Date(endDate) : new Date();

  return (
    <section className="space-y-8">
      <header className="flex items-center justify-between space-x-4 border-b border-dashed border-neutral-600 pb-4">
        <hgroup>
          <h2 className="text-2xl font-semibold">{company}</h2>
          <div className="mt-1 flex gap-1 text-sm">
            <span>{format(start_date, "MMM yyyy")}</span> -{" "}
            <span>{endDate ? format(end_date, "MMM yyyy") : "Present"}</span>
          </div>
        </hgroup>
        {logo ? (
          <LazyLoadImg src={logo} width={60} height={60} alt={company} />
        ) : (
          <BsBuilding size={30} />
        )}
      </header>
      <p className="font-sans text-neutral-700 dark:text-neutral-300">
        Contributing my expertise at <strong>{company}</strong> from{" "}
        {format(start_date, "MMM yyyy")} to{" "}
        {endDate ? format(end_date, "MMM yyyy") : "Present"} as a{" "}
        <strong>{position}</strong>
      </p>
      {!!responsibility && responsibility.length && (
        <PointText text={responsibility} />
      )}
    </section>
  );
}
