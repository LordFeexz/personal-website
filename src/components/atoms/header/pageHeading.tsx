import { cn } from "@/libs/utils";
import { memo } from "react";

export interface PageHeadingProps {
  title: string;
  desc?: string;
  capitalize?: boolean;
}

function PageHeading({ title, desc, capitalize = false }: PageHeadingProps) {
  return (
    <hgroup>
      <h1
        className={cn(
          "font-sora text-2xl font-medium",
          capitalize && "capitalize"
        )}
      >
        {title}
      </h1>
      <p className="mb-6 border-b border-dashed border-neutral-600 pb-6 pt-2 text-neutral-600 dark:text-neutral-400">
        {desc}
      </p>
    </hgroup>
  );
}

export default memo(PageHeading);
