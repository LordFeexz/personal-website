import type { ChildrenProps } from "@/interfaces";
import { cn } from "@/libs/utils";
import { memo } from "react";

export interface ContainerProps extends ChildrenProps {
  className?: string;
  withMarginTop?: boolean;
  as?: "div" | "main" | "section";
  readMode?: boolean;
  [key: string]: any | undefined;
}

function Container({
  children,
  className = "",
  withMarginTop = true,
  as: Tag = "div",
  readMode,
  ...rest
}: ContainerProps) {
  const classname = cn(
    "mb-10",
    (readMode || withMarginTop) && "mt-6",
    "p-4 md:p-8 lg:pr-0",
    className,
    "aos-init aos-animate"
  );

  return (
    <Tag data-testid="container" className={classname} {...rest}>
      {children}
    </Tag>
  );
}

export default memo(Container);
