import { memo, type ReactNode } from "react";
import Link from "next/link";
import { BsGithub } from "@/components/atoms/icons/react-icons-bs";
import { FiExternalLink } from "@/components/atoms/icons/react-icons-fi";

export interface ProjectBtnProps {
  repo?: string;
  live?: string;
}

export interface ProjectLinkProps {
  url: string;
  text: string;
  icon?: ReactNode;
}

function LinkComponent({ url, text, icon }: ProjectLinkProps) {
  return (
    <Link href={url} target="_blank" className="cursor-pointer" passHref>
      <div className="flex items-center gap-2 font-medium text-neutral-700 dark:text-neutral-300 ">
        {icon}
        <span className="text-[15px] transition-all duration-300 dark:text-teal-500 hover:dark:text-teal-400">
          {text}
        </span>
      </div>
    </Link>
  );
}

function ProjectBtn({ repo, live }: ProjectBtnProps) {
  return (
    <div className="flex gap-4">
      {repo && (
        <LinkComponent
          url={repo}
          text="Source Code"
          icon={<BsGithub size={22} />}
        />
      )}
      {repo && live && (
        <span className="text-neutral-400 dark:text-neutral-600">|</span>
      )}
      {live && (
        <LinkComponent
          url={live}
          text="Live Demo"
          icon={<FiExternalLink size={22} />}
        />
      )}
    </div>
  );
}

export default memo(ProjectBtn);
