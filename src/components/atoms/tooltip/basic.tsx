"use client";

import type { ChildrenProps } from "@/interfaces";
import { motion } from "framer-motion";
import { useState } from "react";

export interface BasicTooltipProps extends ChildrenProps {
  title: string;
}

export default function BasicTooltip({ children, title }: BasicTooltipProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const tooltipVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };
  const event = {
    onMouseEnter: () => setVisible(true),
    onMouseLeave: () => setVisible(false),
  };

  return (
    <summary data-testid="tooltip-container" className="relative inline-block">
      <div
        data-testid="children-container"
        className="tooltip-container relative"
        {...event}
      >
        {children}
      </div>
      {visible && (
        <motion.details
          data-testid="title"
          className="absolute bottom-full mb-2 hidden w-max max-w-xs rounded bg-neutral-500 px-2 py-1 text-xs font-medium text-neutral-100 dark:bg-neutral-100 dark:text-neutral-700 lg:block"
          variants={tooltipVariants}
          initial="hidden"
          animate="visible"
        >
          {title}
        </motion.details>
      )}
    </summary>
  );
}
