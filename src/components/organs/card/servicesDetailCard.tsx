import BasicCard from "@/components/atoms/card/basicCard";
import LazyLoadImg from "@/components/atoms/image/lazyLoadImg";
import type { StaticImageData } from "next/image";
import Link from "next/link";

export interface ServiceDetailCardProps {
  title: string;
  desc: string;
  featured?: boolean;
  img: string | StaticImageData;
}

export default function ServiceDetailCard({
  title,
  desc,
  featured,
  img,
}: ServiceDetailCardProps) {
  return (
    <BasicCard className="relative cursor-pointer border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-800 lg:hover:scale-[102%]">
      <Link href={`/service/${title}`} prefetch>
        {featured && (
          <div className="absolute right-0 top-0 z-[2] rounded-bl-xl rounded-tr-xl bg-emerald-300 px-2 py-1 text-[13px] font-medium text-emerald-950">
            Featured
          </div>
        )}
        <LazyLoadImg
          className="h-48 rounded-t-xl object-cover object-left"
          src={img}
          alt={title}
          width={400}
          height={200}
        />
        <hgroup className="space-y-2 p-5">
          <div className="font-sora cursor-pointer text-lg text-neutral-700 transition-all duration-300 dark:text-neutral-300 dark:hover:text-teal-400 lg:hover:text-teal-800">
            {title.replaceAll("-", " ")}
          </div>
          <p className="text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-400">
            {desc.slice(0, 70) + (desc.length > 70 ? "..." : "")}
          </p>
        </hgroup>
      </Link>
    </BasicCard>
  );
}
