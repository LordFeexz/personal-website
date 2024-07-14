import BasicTooltip from "@/components/atoms/tooltip/basic";
import ProjectBtn from "@/components/molleculs/button/projectBtn";
import Slider, {
  type SliderImgs,
} from "@/components/molleculs/contents/slider";
import { TECHSTACKS } from "@/constants/stacks";

export interface ProjectDetails {
  repo: string;
  live?: string;
  imgs: SliderImgs[];
  stacks: string[];
  featured?: boolean;
  slug: string;
}

export default function ProjectDetail({
  slug,
  stacks,
  imgs,
  repo,
  live,
}: ProjectDetails) {
  return (
    <section className="space-y-8 overflow-hidden">
      <nav className="flex flex-col items-start justify-between gap-5 sm:flex-row lg:flex-row lg:items-center">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mb-1 text-[15px] text-neutral-700 dark:text-neutral-300">
            Tech Stack :
          </span>
          <div className="flex flex-wrap items-center gap-3">
            {stacks?.map((stack: string, index: number) => (
              <div key={index}>
                <BasicTooltip title={stack}>
                  <div className="w-5">{TECHSTACKS[stack]}</div>
                </BasicTooltip>
              </div>
            ))}
          </div>
        </div>
        <ProjectBtn repo={repo} live={live} />
      </nav>
      <Slider imgs={imgs} width={800} height={400} slug={slug} />
    </section>
  );
}
