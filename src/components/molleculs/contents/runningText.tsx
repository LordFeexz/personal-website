"use client";

import useSWR from "swr";
import { usePathname } from "next/navigation";
import { sendDataLayer } from "@/libs/googleTagManager";
import useMenu from "@/hooks/useMenu";
import MarqueeElement from "@/components/atoms/contents/marquee";
import request from "@/libs/axios";

export default function RunningText() {
  const { data, isLoading } = useSWR("/api/ads", request.fetcher<any>);

  const { isOpen } = useMenu();
  const pathname = usePathname();

  if (isLoading) return;

  const ads = data?.data;

  function onRedirect() {
    sendDataLayer({
      event: "running_text_clicked",
      page_path: pathname,
    });
    window.open((ads as any)?.link, "_blank");
  }

  return (ads as any)?.isShow && !isOpen ? (
    <button
      onClick={onRedirect}
      className="absolute left-0 right-0 top-[70px] z-50 flex w-full animate-enter-left bg-emerald-200 text-neutral-800 opacity-100 shadow-md dark:bg-emerald-100 lg:fixed lg:left-auto lg:top-0 lg:max-w-lg lg:rounded-bl-full lg:pl-2"
    >
      <MarqueeElement withPadding={false}>
        <p className="flex space-x-2 py-[2px] text-[10px] md:py-1 md:text-xs">
          {(ads as any).message}
        </p>
      </MarqueeElement>
    </button>
  ) : null;
}
