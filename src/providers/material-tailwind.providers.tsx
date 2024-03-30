"use client";

import type { ChildrenProps } from "@/interfaces";
import { ThemeProvider } from "@material-tailwind/react";

export default function MaterialTailwindProvider({ children }: ChildrenProps) {
  return (
    <ThemeProvider>
      <>{children}</>
    </ThemeProvider>
  );
}
