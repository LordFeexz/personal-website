import { memo } from "react";

export interface BreaklineProps {
  className?: string;
  [key: string]: string | undefined;
}

function Breakline({ className, ...rest }: BreaklineProps) {
  return (
    <hr
      {...rest}
      className={`my-4 border-t border-gray-300 dark:border-neutral-700 ${className}`}
      data-testid="breakline"
    />
  );
}

export default memo(Breakline);
