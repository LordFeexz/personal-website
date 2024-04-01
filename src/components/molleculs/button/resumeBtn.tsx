"use client";

import type { MouseEventHandler } from "react";
import { usePathname } from "next/navigation";
import { DownloadIcon } from "@/components/atoms/icons/react-icons-bi";
import { sendDataLayer } from "@/libs/googleTagManager";

export default function ResumeBtn() {
  const pathname = usePathname();
  const download: MouseEventHandler = (e) => {
    e.preventDefault();

    sendDataLayer({
      event: "resume_clicked",
      page_path: pathname,
    });

    const link = document.createElement("a");
    link.href = "/assets/Ananda-Fiqri-Resume.pdf";
    link.download = "Ananda-Fiqri-Resume";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={download}
      className="flex items-center gap-2 text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-500 hover:dark:text-neutral-300"
      data-umami-event="Download Resume"
    >
      <div
        data-testid="download-icon-container"
        className="overflow-hidden border-b-2 border-neutral-600 dark:border-neutral-500"
      >
        <DownloadIcon
          data-testid="download-icon"
          className="animate-rain-arrow"
        />
      </div>
      <span>Download Resume</span>
    </button>
  );
}
