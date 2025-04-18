"use client";

import { memo, useCallback, useMemo, useState, type ReactNode } from "react";
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

function MenuItem({
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

  const onClickHandler = useCallback(() => {
    hideMenu();
    if (typeof onClick === "function") onClick();
  }, [hideMenu, onClick]);

  const handler = useMemo(
    () => ({
      onMouseEnter: () => {
        setIsHovered(true);
      },
      onMouseLeave: () => {
        setIsHovered(false);
      },
    }),
    [setIsHovered]
  );

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
        className={`flex lg:hover:rounded-lg lg:hover:py-2 lg:hover:px-4 hover:scale-105 justify-center px-4 py-2 rounded-lg lg:rounded-full lg:p-2 gap-2 text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-black dark:lg:hover:bg-neutral-800 lg:hover:bg-neutral-200 lg:hover:gap-3 lg:transition-all lg:duration-300 dark:hover:bg-slate-300! hover:bg-neutral-800 ${className}`}
        {...handler}
      >
        {icon}
        {isHover && (
          <div className="ml-1 animate-enter-left whitespace-nowrap text-sm delay-1000">
            {title}
          </div>
        )}
        <div className="grow lg:hidden">{title}</div>
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

export default memo(MenuItem);
