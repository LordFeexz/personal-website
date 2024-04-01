"use client";

import type { ChildrenProps } from "@/interfaces";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import MobileHeader from "../header/mainMobileHeader";
import RunningText from "@/components/molleculs/contents/runningText";
import CollapseSidebar from "../sidebar/collapseSidebar";

export default function MainViews({ children }: ChildrenProps) {
  const searchParams = useSearchParams();
  const readMode = searchParams.get("read-mode");

  const hideSidebar = readMode?.toLowerCase() === "true";

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex w-full flex-col justify-center lg:flex-row lg:gap-5">
        {!hideSidebar && (
          <>
            <MobileHeader /> <RunningText />
          </>
        )}
      </div>
      <main className="no-scrollbar w-full scroll-smooth transition-all duration-300 lg:ml-10 lg:min-h-screen lg:max-w-[854px]">
        {children}
      </main>
      {!hideSidebar && <CollapseSidebar />}
    </div>
  );
}
