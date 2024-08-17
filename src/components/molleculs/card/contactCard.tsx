"use client";

import { sendDataLayer } from "@/libs/googleTagManager";
import { usePathname } from "next/navigation";
import { memo, useCallback, type ReactNode } from "react";
import clsxm from "@/libs/clsxm";

export interface ContactCardProps {
  title: string;
  href: string;
  icon: ReactNode;
  backgroundColor: string;
}

function ContactCard({ title, href, icon, backgroundColor }: ContactCardProps) {
  const pathname = usePathname();
  const handleCardClick = useCallback(() => {
    sendDataLayer({
      event: "contact_clicked",
      contact_title: title,
      page_path: pathname,
    });
    window.open(href, "_blank");
  }, [href, pathname, title]);

  return (
    <button
      onClick={handleCardClick}
      className={clsxm(
        backgroundColor,
        "flex w-full items-center justify-center space-x-2 rounded-lg px-4 py-2 dark:text-white text-black shadow-lg md:w-max"
      )}
    >
      {icon}
      <span className="text-sm">{title}</span>
    </button>
  );
}

export default memo(ContactCard);
