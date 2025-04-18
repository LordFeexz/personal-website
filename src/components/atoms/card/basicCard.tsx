import type { ChildrenProps } from "@/interfaces";
import { memo } from "react";

export interface BasicCardProps extends ChildrenProps {
  className?: string;
  as?: "main" | "section" | "div" | "article";
  [key: string]: any;
}

function BasicCard({
  children,
  className = "",
  as: Tag = "div",
  ...rest
}: BasicCardProps) {
  const classname = `rounded-xl shadow-xs transition-all duration-300 lg:hover:shadow-md ${className}`;

  return (
    <Tag data-testid="card" className={classname} {...rest}>
      {children}
    </Tag>
  );
}

export default memo(BasicCard);
