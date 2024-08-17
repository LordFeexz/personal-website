import ME from "@/components/images/me2.jpg";
import LazyLoadImg from "@/components/atoms/image/lazyLoadImg";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { memo } from "react";

export interface CopyrightProps {
  isHover: boolean;
}

function Copyright({ isHover }: CopyrightProps) {
  return (
    <footer className="font-sora flex items-center gap-1 px-3 py-1 text-sm text-neutral-600 dark:text-neutral-400">
      {isHover ? (
        <HoverBorderGradient>
          <span>©</span>
          <span>{new Date().getFullYear()}</span> <span>by</span>{" "}
          <span className="cursor-pointer hover:dark:text-neutral-400">
            Lord Feexz
          </span>
        </HoverBorderGradient>
      ) : (
        <LazyLoadImg
          src={ME}
          alt="me"
          className="animate-pulse rounded-full object-cover object-center"
          width={175}
          height={175}
        />
      )}
    </footer>
  );
}

export default memo(Copyright);
