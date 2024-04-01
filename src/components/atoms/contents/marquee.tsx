"use client";

import type { ChildrenProps } from "@/interfaces";
import Marquee from "react-fast-marquee";

export interface MarqueeElementProps extends ChildrenProps {
  direction?: "left" | "right" | "up";
  withPadding?: boolean;
}

export default function MarqueeElement({
  children,
  direction,
  withPadding,
}: MarqueeElementProps) {
  return (
    <Marquee
      direction={direction}
      speed={25}
      className={withPadding ? "py-3" : ""}
    >
      {children}
    </Marquee>
  );
}
