import type { OptionalChildrenProps } from "@/interfaces";
import { memo } from "react";

function SubSectionHeading({ children }: OptionalChildrenProps) {
  return (
    <div className="flex flex-col justify-between gap-2 text-neutral-600 dark:text-neutral-400 md:flex-row lg:items-center">
      {children}
    </div>
  );
}

export default memo(SubSectionHeading);
