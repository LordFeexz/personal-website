"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { BsArrowRightShort } from "@/components/atoms/icons/react-icons-bs";
import useMenu from "@/hooks/useMenu";

export interface MenuItemProps {
  title: string;
  href: string;
  icon: ReactNode;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
  isHover?: boolean;
}

export default function MenuItem({
  title,
  href,
  icon,
  onClick,
  className = "",
  children,
  isHover,
}: MenuItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { hideMenu } = useMenu();

  const onClickHandler = () => {
    hideMenu();
    if (typeof onClick === "function") onClick();
  };

  const handler = {
    onMouseEnter: () => {
      setIsHovered(true);
    },
    onMouseLeave: () => {
      setIsHovered(false);
    },
  };

  return (
    <Link
      aria-label={title}
      tabIndex={0}
      href={href}
      onClick={onClickHandler}
      prefetch
      className="cursor-pointer"
    >
      <div
        className={`flex hover:lg:rounded-lg hover:lg:py-2 hover:lg:px-4 hover:scale-105 justify-center px-4 py-2 rounded-lg lg:rounded-full lg:p-2 gap-2 text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-black hover:dark:lg:bg-neutral-800 hover:lg:bg-neutral-200 lg:hover:gap-3 lg:transition-all lg:duration-300 hover:dark:!bg-slate-300 hover:bg-neutral-800 ${className}`}
        {...handler}
      >
        {icon}
        {isHover && (
          <div className="ml-1 animate-enter-left whitespace-nowrap text-sm delay-1000">
            {title}
          </div>
        )}
        <div className="flex-grow lg:hidden">{title}</div>
        {!!children && <>{children}</>}
        {isHovered && (
          <BsArrowRightShort
            size={22}
            className="-rotate-45 text-gray-500 lg:transition-all lg:duration-300"
          />
        )}
      </div>
    </Link>
  );
}
