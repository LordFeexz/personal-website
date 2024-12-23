"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { memo, useCallback, useMemo } from "react";

import { FiArrowLeftCircle } from "react-icons/fi";

export interface BackBtnProps {
  url?: string;
}

function BackBtn({ url }: BackBtnProps) {
  const router = useRouter();

  const handleOnClick = useCallback(() => {
    if (url) {
      router.push(url);
    } else {
      router.back();
    }
  }, [router, url]);

  const className = useMemo(
    () =>
      "flex gap-2 w-max hover:gap-3 items-center pb-5 transition-all duration-300 font-medium text-neutral-600 dark:text-neutral-400 cursor-pointer",
    []
  );

  const BackButtonChildComponent = () => {
    return (
      <>
        <FiArrowLeftCircle size={20} data-testid="back-icon" />
        <span>Back</span>
      </>
    );
  };

  return (
    <div className="w-fit">
      {url ? (
        <Link data-testid="back-button-url" href={url} passHref>
          <div className={className}>
            <BackButtonChildComponent />
          </div>
        </Link>
      ) : (
        <div
          data-testid="back-button"
          className={className}
          onClick={handleOnClick}
        >
          <BackButtonChildComponent />
        </div>
      )}
    </div>
  );
}

export default memo(BackBtn);
