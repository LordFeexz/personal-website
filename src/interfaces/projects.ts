import type { StaticImageData } from "next/image";

export interface MyProjects {
  title: string;
  slug: string;
  desc: string;
  stacks: string[];
  featured?: boolean;
  imgs: MyProjectsImg[];
  repo?: string;
  thumbnail: string | StaticImageData;
  live?: string;
}

export interface MyProjectsImg {
  url: string | StaticImageData;
  alt: string;
  desc: string;
}
