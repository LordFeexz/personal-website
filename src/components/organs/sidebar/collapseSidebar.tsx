"use client";

import LazyLoadImg from "@/components/atoms/image/lazyLoadImg";
import { useState } from "react";
import Profile from "../contents/profile";
import MeJpg from "@/components/images/me.jpeg";
import ThemeToggleBtn from "@/components/atoms/button/toggleThemeBtn";
import { SIDEBAR_MENU } from "@/constants/sidebar";
import MenuItem from "@/components/molleculs/menu/menuItem";
import Copyright from "@/components/molleculs/footer/copyright";

export default function CollapseSidebar() {
  const [isHover, setIsHover] = useState(false);

  return (
    <aside
      className="fixed bottom-0 left-0 top-0 z-30 hidden w-16 flex-col items-center justify-between overflow-hidden rounded-r-2xl px-2 py-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-all duration-500 hover:w-64 hover:items-stretch hover:p-4 hover:transition-all hover:duration-500 dark:shadow-neutral-800 lg:flex"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <section
        className={`flex h-64 ${isHover ? "items-start" : "items-center"}`}
      >
        {isHover ? (
          <Profile />
        ) : (
          <article className="flex flex-col items-center gap-8">
            <div className="z-10 rounded-full border-2 border-white shadow-md dark:border-neutral-800">
              <LazyLoadImg
                src={MeJpg}
                alt="profile"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <ThemeToggleBtn />
          </article>
        )}
      </section>
      <nav className="mb-6 mt-4 flex flex-col gap-3 border-t border-neutral-300 pt-4">
        {SIDEBAR_MENU.map((el) => (
          <MenuItem key={el.title} {...el} isHover={isHover} />
        ))}
      </nav>
      <Copyright isHover={isHover} />
    </aside>
  );
}
