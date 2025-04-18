import Link from "next/link";
import LazyLoadImg from "@/components/atoms/image/lazyLoadImg";
import clsx from "clsx";
import { VerifiedIcon } from "@/components/atoms/icons/react-icons-md";
import HireBtn from "../button/hireBtn";
import BackDropImg from "@/components/images/backdrop.webp";
import ThemeToggleBtn from "@/components/atoms/button/toggleThemeBtn";
import MeJpg from "@/components/images/me.jpeg";
import BasicTooltip from "@/components/atoms/tooltip/basic";
import { GITHUB_PROFILE } from "@/constants";
import Image from "next/image";
import { memo } from "react";

export interface ProfileHeaderProps {
  expand: boolean;
  imgSize: number;
}

function ProfileHeader({ expand, imgSize }: ProfileHeaderProps) {
  return (
    <article
      className={clsx(
        "flex w-full grow items-center gap-4 lg:flex-col lg:gap-0.5",
        expand && "flex-col items-start!"
      )}
    >
      <div className="relative hidden w-full flex-col items-center overflow-hidden pb-2 lg:flex">
        <HireBtn />
        <div className="h-24 w-full overflow-hidden rounded-lg dark:brightness-50">
          <Image
            src={BackDropImg}
            alt="backdrop"
            width={100}
            height={100}
            className="-ml-4 w-full scale-125"
            priority
          />
        </div>
        <div className="absolute -right-1 bottom-[55px] z-10 rounded-xl py-2 pr-2">
          <ThemeToggleBtn />
        </div>
        <div className="z-10 -mt-11 rounded-full border-2 border-white shadow-md dark:border-neutral-800">
          <LazyLoadImg
            src={MeJpg}
            alt="profile"
            width={expand ? 80 : imgSize * 0.9}
            height={expand ? 80 : imgSize * 0.9}
            rounded="rounded-full"
            className="lg:hover:scale-105"
          />
        </div>
      </div>
      <LazyLoadImg
        src={MeJpg}
        alt="profile"
        width={expand ? 80 : imgSize * 0.9}
        height={expand ? 80 : imgSize * 0.9}
        rounded="rounded-full"
        className="lg:hidden lg:hover:scale-105"
      />
      <hgroup className="mt-1 flex items-center gap-2">
        <Link href="/" passHref>
          <h2 className="font-sora grow whitespace-nowrap text-lg font-medium lg:text-xl">
            Ananda Fiqri
          </h2>
        </Link>
        <BasicTooltip title="Verified">
          <VerifiedIcon size={18} className="text-blue-400" />
        </BasicTooltip>
      </hgroup>
      <Link
        href={GITHUB_PROFILE}
        target="_blank"
        className="font-sora hidden text-sm text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 lg:flex"
      >
        @LordFeexz
      </Link>
    </article>
  );
}

export default memo(ProfileHeader);
