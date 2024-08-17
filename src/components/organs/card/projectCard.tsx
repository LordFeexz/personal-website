import LazyLoadImg from "@/components/atoms/image/lazyLoadImg";
import Link from "next/link";
import BasicTooltip from "@/components/atoms/tooltip/basic";
import type { StaticImageData } from "next/image";
import { TECHSTACKS } from "@/constants/stacks";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { memo } from "react";

export interface ProjectCardProps {
  title: string;
  slug: string;
  desc: string;
  img: string | StaticImageData;
  stacks: string[];
  featured?: boolean;
}

function ProjectCard({
  title,
  slug,
  stacks,
  desc,
  img,
  featured = false,
}: ProjectCardProps) {
  return (
    <CardContainer className="relative cursor-pointer border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-800 lg:hover:scale-[102%]">
      <CardBody>
        <Link href={`/projects/${slug}`} prefetch passHref>
          {featured && (
            <CardItem className="absolute right-0 top-0 z-[2] rounded-bl-xl rounded-tr-xl bg-emerald-300 px-2 py-1 text-[13px] font-medium text-emerald-950">
              Featured
            </CardItem>
          )}
          <LazyLoadImg
            src={img}
            alt={slug}
            width={400}
            height={200}
            className="h-48 rounded-t-xl object-cover object-left"
          />
        </Link>
        <div className="space-y-2 p-5">
          <Link href={`/projects/${slug}`} prefetch passHref>
            <CardItem as="hgroup">
              <h1 className="font-sora cursor-pointer text-lg text-neutral-700 transition-all duration-300 dark:text-neutral-300 dark:hover:text-teal-400 lg:hover:text-teal-800">
                {title}
              </h1>
              <p className="text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-400">
                {desc.slice(0, 70) + (desc.length > 70 ? "..." : "")}
              </p>
            </CardItem>
          </Link>
          <CardItem as="nav" className="flex flex-wrap items-center gap-3 pt-2">
            {stacks?.map((stack) => (
              <div key={stack} className="w-6">
                <BasicTooltip title={stack}>{TECHSTACKS[stack]}</BasicTooltip>
              </div>
            ))}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default memo(ProjectCard);
