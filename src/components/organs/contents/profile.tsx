"use client";

import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import useMobile from "@/hooks/useMobile";
import useMenu from "@/hooks/useMenu";
import ThemeToggleBtn from "@/components/atoms/button/toggleThemeBtn";
import { memo, useEffect } from "react";
import ProfileHeader from "@/components/molleculs/contents/profileHeader";
import MobileMenuButton from "@/components/molleculs/button/mobileMenuBtn";
import MobileSidebarMenu from "@/components/molleculs/menu/mobileSidebarMenu";

function Profile() {
  const { isOpen, toggleMenu } = useMenu();
  const isMobile = useMobile();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header
      className={clsx(
        "fixed z-20 w-full bg-white p-5 shadow-sm dark:border-b dark:border-neutral-800 dark:bg-dark lg:relative lg:border-none lg:!bg-transparent lg:p-0 xl:shadow-none",
        isOpen && "pb-0"
      )}
    >
      <div className="flex items-start justify-between lg:flex-col lg:space-y-4">
        <ProfileHeader expand={isOpen} imgSize={isMobile ? 40 : 100} />
        {isMobile && (
          <div
            className={clsx(
              "mt-2 flex items-center gap-5 lg:hidden",
              isOpen &&
                "h-[120px] flex-col-reverse !items-end justify-between pb-1"
            )}
          >
            <ThemeToggleBtn />
            <MobileMenuButton expand={isOpen} setExpand={toggleMenu} />
          </div>
        )}
      </div>
      {isMobile && (
        <AnimatePresence>{isOpen && <MobileSidebarMenu />}</AnimatePresence>
      )}
    </header>
  );
}

export default memo(Profile);
