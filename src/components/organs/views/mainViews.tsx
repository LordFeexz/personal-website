"use client";

import type { ChildrenProps } from "@/interfaces";
import AOS from "aos";
import { Suspense, useEffect } from "react";
import MobileHeader from "../header/mainMobileHeader";
import RunningText from "@/components/molleculs/contents/runningText";
import CollapseSidebar from "../sidebar/collapseSidebar";
import PageLoader from "@/components/atoms/loaders/pageLoader";

export interface MainViewsProps extends ChildrenProps {
  readMode?: boolean;
}

export default function MainViews({ children, readMode }: MainViewsProps) {
  // const searchParams = useSearchParams();
  // const readMode = searchParams.get("read-mode");
  // const hideSidebar = readMode?.toLowerCase() === "true";

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <div className="flex flex-col justify-center">
        <header className="flex w-full flex-col justify-center lg:flex-row lg:gap-5 lg:hidden">
          {!readMode && (
            <>
              <MobileHeader /> <RunningText />
            </>
          )}
        </header>
        <main className="no-scrollbar w-full scroll-smooth transition-all duration-300 lg:ml-72 lg:min-h-screen lg:max-w-[854px]">
          {children}
        </main>
        {!readMode && <CollapseSidebar />}
      </div>
    </Suspense>
  );
}
