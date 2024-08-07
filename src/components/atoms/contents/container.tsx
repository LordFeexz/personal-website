import type { ChildrenProps } from "@/interfaces";

export interface ContainerProps extends ChildrenProps {
  className?: string;
  withMarginTop?: boolean;
  as?: "div" | "main" | "section";
  readMode?: boolean;
  [key: string]: any | undefined;
}

export default function Container({
  children,
  className = "",
  withMarginTop = true,
  as: Tag = "div",
  readMode,
  ...rest
}: ContainerProps) {
  const classname = `mb-10 ${
    (readMode || withMarginTop) && "mt-6"
  } p-4 md:p-8 lg:pr-0 ${className}`;

  return (
    <Tag data-testid="container" className={classname} {...rest}>
      {children}
    </Tag>
  );
}
