"use client";

import BasicCard from "@/components/atoms/card/basicCard";
import { useRouter } from "next/navigation";
import { differenceInMonths, differenceInYears, format } from "date-fns";
import { useTheme } from "next-themes";
import { BsBuilding } from "@/components/atoms/icons/react-icons-bs";
import useMounted from "@/hooks/useMounted";
import LazyLoadImg from "@/components/atoms/image/lazyLoadImg";
import { sendDataLayer } from "@/libs/googleTagManager";
import clsxm from "@/libs/clsxm";
import type { StaticImageData } from "next/image";
import { memo, useCallback, useMemo } from "react";

export interface CareerCardProps {
  position: string;
  company: string;
  logo?: string | StaticImageData;
  location: string;
  startDate: Date | string;
  endDate?: Date | string;
  slug?: string;
}

function CareerCard({
  position,
  company,
  location,
  logo,
  startDate,
  slug,
  endDate,
}: CareerCardProps) {
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const mount = useMounted();

  const start_date = useMemo(() => new Date(startDate), [startDate]);
  const end_date = useMemo(
    () => (endDate ? new Date(endDate) : new Date()),
    [endDate]
  );

  const durationYears = useMemo(
    () => differenceInYears(end_date, start_date),
    [end_date, start_date]
  );
  const durationMonths = useMemo(
    () => differenceInMonths(end_date, start_date) % 12,
    [end_date, start_date]
  );

  let durationText = "";
  if (durationYears > 0) {
    durationText += `${durationYears} Year${durationYears > 1 ? "s" : ""} `;
  }
  if (durationMonths > 0 || durationYears === 0) {
    durationText += `${durationMonths} Month${durationMonths > 1 ? "s" : ""}`;
  }

  const handleCardClick = useCallback(() => {
    sendDataLayer({
      event: "career_clicked",
      career_position: position,
      career_company: company,
      career_duration: durationText,
    });
    router.push(`/experience/${slug}`);
  }, [company, durationText, position, router, slug]);

  return mount ? (
    <BasicCard
      as="article"
      onClick={handleCardClick}
      className="flex h-max min-w-[350px] cursor-pointer items-center gap-5 overflow-hidden rounded-l-sm rounded-r-xl border border-l-0 border-neutral-300 py-2 !shadow-none duration-500 hover:scale-95 dark:border-neutral-600 dark:bg-neutral-900"
    >
      <header className="relative my-2 h-max">
        <div
          className={clsxm(
            "flex items-center rounded-r-full border border-l-0 border-neutral-300 shadow-lg dark:border-neutral-600 dark:shadow-neutral-800",
            resolvedTheme === "light"
              ? "inverted-image-left"
              : "inverted-image-left-dark"
          )}
        >
          {logo ? (
            <LazyLoadImg
              src={logo}
              width={55}
              height={55}
              alt={company}
              className="relative z-10"
            />
          ) : (
            <BsBuilding size={30} />
          )}
        </div>
      </header>

      <div className="flex flex-col items-start space-y-1">
        <hgroup>
          <h2>{position}</h2>
          <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center gap-1 md:gap-2">
              <span>{company}</span>
              <span className="text-neutral-300 dark:text-neutral-700">•</span>
              <span>{location}</span>
            </div>
            <div className="flex flex-col items-start md:text-[13px]">
              <div className="flex gap-1">
                <span>{format(start_date, "MMM yyyy")}</span> -{" "}
                <span>
                  {endDate ? format(end_date, "MMM yyyy") : "Present"}
                </span>
              </div>
              <span className="text-neutral-500 dark:text-neutral-500">
                ~ {durationText}
              </span>
            </div>
          </div>
        </hgroup>
      </div>
    </BasicCard>
  ) : null;
}

export default memo(CareerCard);
