import LazyLoadImg from "@/components/atoms/image/lazyLoadImg";
import type { StaticImageData } from "next/image";
import Link from "next/link";

export interface SliderImgs {
  url: string | StaticImageData;
  alt: string;
}

export interface SliderProps {
  imgs: SliderImgs[];
  height?: number;
  width?: number;
  className?: string;
  slug: string;
}

export default function Slider({
  imgs,
  width,
  height,
  className,
  slug,
}: SliderProps) {
  return (
    <section className={`relative ${className}`}>
      <nav className="relative z-0 mx-[2px] grid snap-x grid-flow-col overflow-y-hidden pl-5 sm:pl-10 lg:pl-16 hide-scrollbar">
        {imgs.map(({ url, alt }) => (
          <Link
            href={`/projects/${slug}/${alt}`}
            prefetch
            key={alt}
            className="w-[86vw] max-w-[86vw] snap-center py-10 pr-5 sm:w-[484px] sm:max-w-none sm:py-16"
          >
            <LazyLoadImg
              src={url}
              alt={alt}
              width={width && width * 1.5}
              height={height && height * 1.5}
              className="rounded-3xl transition-all duration-300 hover:scale-105"
            />
          </Link>
        ))}
        <hr className="sm:pr-11" />
      </nav>
    </section>
  );
}
