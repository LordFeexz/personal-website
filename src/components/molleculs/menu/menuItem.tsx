"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const isExternalUrl = href?.includes("http");
  const isHashLink = href === "#";
  const pathname = usePathname();
  const url = new URL(href, process.env.NEXT_PUBLIC_DOMAIN);

  const activeClasses = `flex ${
    !isHover
      ? "justify-center px-4 py-2 rounded-lg lg:rounded-full lg:p-2"
      : "lg:rounded-lg lg:py-2 lg:px-4"
  } gap-2 text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-300 ${
    pathname === url.pathname
      ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:!text-neutral-300"
      : "hover:dark:lg:bg-neutral-800 hover:lg:bg-neutral-100 hover:lg:rounded-lg lg:hover:gap-3 lg:transition-all lg:duration-300"
  }`;

  const onClickHandler = () => {
    hideMenu();
    if (typeof onClick === "function") onClick();
  };

  const handler = {
    onClick: onClickHandler,
    onMouseEnter: () => {
      setIsHovered(true);
    },
    onMouseLeave: () => {
      setIsHovered(false);
    },
  };

  const components = () => (
    <div className={`${activeClasses} ${className}`} {...handler}>
      {icon}
      {isHover && (
        <div className="ml-1 animate-enter-left whitespace-nowrap text-sm delay-1000">
          {title}
        </div>
      )}
      <div className="flex-grow lg:hidden">{title}</div>
      {children && <>{children}</>}
      {isExternalUrl && isHovered && (
        <BsArrowRightShort
          size={22}
          className="-rotate-45 text-gray-500 lg:transition-all lg:duration-300"
        />
      )}
    </div>
  );

  return isHashLink ? (
    <div className="cursor-pointer">{components()}</div>
  ) : (
    <Link
      aria-label={title}
      tabIndex={0}
      href={href}
      target={isExternalUrl ? "_blank" : ""}
      onClick={onClickHandler}
      prefetch
    >
      {components()}
    </Link>
  );
}
