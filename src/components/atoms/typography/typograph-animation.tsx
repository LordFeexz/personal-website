"use client";

import { TypeAnimation } from "react-type-animation";

export interface TypographAnimationProps {
  sequence: string[];
  delay?: number;
}

export default function TypographAnimation({
  sequence,
  delay = 1000,
}: TypographAnimationProps) {
  const sequences: (string | number)[] = [];

  sequence.forEach((el, idx) => {
    sequences.push(el);

    if (idx < sequence.length) sequences.push(delay);
  });

  return (
    <TypeAnimation
      sequence={sequences}
      speed={10}
      repeat={Infinity}
      aria-label={sequence[0]}
      deletionSpeed={70}
    />
  );
}
