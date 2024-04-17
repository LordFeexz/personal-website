import LazyLoadImg from "@/components/atoms/image/lazyLoadImg";
import Link from "next/link";
import BasicCard from "@/components/atoms/card/basicCard";
import BasicTooltip from "@/components/atoms/tooltip/basic";
import type { StaticImageData } from "next/image";
import {
  BiLogoGoLang,
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoRedux,
  SiAstro,
  SiBootstrap,
  SiApachecassandra,
  SiCss3,
  SiDjango,
  SiElasticsearch,
  SiExpress,
  SiFirebase,
  SiGraphql,
  SiHeroku,
  SiHtml5,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNestjs,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiRabbitmq,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiSocketdotio,
  FaReact,
  FaVuejs,
  DiRedis,
  SiBun,
} from "@/components/atoms/icons/stacks";
import type { ReactNode } from "react";

export interface ProjectCardProps {
  title: string;
  slug: string;
  desc: string;
  img: string | StaticImageData;
  stacks: string[];
  featured?: boolean;
}

export default function ProjectCard({
  title,
  slug,
  stacks,
  desc,
  img,
  featured = false,
}: ProjectCardProps) {
  const size = "100%";
  const techstacks: Record<string, ReactNode> = {
    golang: (
      <Link target="_blank" href="https://go.dev/">
        <BiLogoGoLang size={size} className="text-cyan-300" />
      </Link>
    ),
    bun: (
      <Link target="_blank" href="https://bun.sh/">
        <SiBun size={size} className="text-yellow-50" />
      </Link>
    ),
    postgres: (
      <Link target="_blank" href="https://www.postgresql.org/">
        <BiLogoPostgresql size={size} className=" text-blue-900" />
      </Link>
    ),
    python: (
      <Link target="_blank" href="https://www.python.org/">
        <BiLogoPython size={size} className=" text-blue-800" />
      </Link>
    ),
    redux: (
      <Link target="_blank" href="https://redux.js.org/">
        <BiLogoRedux size={size} className=" text-purple-500" />
      </Link>
    ),
    astro: (
      <Link target="_blank" href="https://astro.build/">
        <SiAstro size={size} className=" text-red-600" />
      </Link>
    ),
    bootstrap: (
      <Link target="_blank" href="https://getbootstrap.com/">
        {" "}
        <SiBootstrap size={size} className=" text-purple-700" />
      </Link>
    ),
    cassandra: (
      <Link target="_blank" href="https://cassandra.apache.org/_/index.html">
        <SiApachecassandra size={size} className=" text-blue-300" />
      </Link>
    ),
    css: (
      <Link target="_blank" href="https://devdocs.io/css/">
        <SiCss3 size={size} className=" text-blue-400" />
      </Link>
    ),
    django: (
      <Link target="_blank" href="https://www.djangoproject.com/">
        <SiDjango size={size} className=" text-green-900" />
      </Link>
    ),
    elasticSearch: (
      <Link target="_blank" href="https://www.elastic.co/elasticsearch">
        <SiElasticsearch size={size} className=" text-green-500" />
      </Link>
    ),
    express: (
      <Link target="_blank" href="https://expressjs.com/">
        <SiExpress size={size} className=" text-yellow-500" />
      </Link>
    ),
    firebase: (
      <Link target="_blank" href="https://firebase.google.com/">
        <SiFirebase size={size} className=" text-yellow-600" />
      </Link>
    ),
    graphql: (
      <Link target="_blank" href="https://graphql.org/">
        <SiGraphql size={size} className=" text-pink-500" />
      </Link>
    ),
    heroku: (
      <Link target="_blank" href="https://www.heroku.com/">
        <SiHeroku size={size} className=" text-purple-900" />
      </Link>
    ),
    html: (
      <Link
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
      >
        <SiHtml5 size={size} className=" text-orange-700" />
      </Link>
    ),
    mongoDb: (
      <Link target="_blank" href="https://www.mongodb.com/">
        <SiMongodb size={size} className=" text-green-500" />
      </Link>
    ),
    mongoose: (
      <Link target="_blank" href="https://mongoosejs.com/">
        <SiMongoose size={size} className=" text-red-500" />
      </Link>
    ),
    mySql: (
      <Link target="_blank" href="https://www.mysql.com/">
        <SiMysql size={size} className=" text-blue-600" />
      </Link>
    ),
    nestjs: (
      <Link target="_blank" href="https://nestjs.com/">
        <SiNestjs size={size} className=" text-red-600" />
      </Link>
    ),
    netlify: (
      <Link target="_blank" href="https://www.netlify.com/">
        <SiNetlify size={size} />
      </Link>
    ),
    nextjs: (
      <Link target="_blank" href="https://nextjs.org/">
        <SiNextdotjs size={size} />
      </Link>
    ),
    nodejs: (
      <Link target="_blank" href="https://nodejs.org/en">
        <SiNodedotjs size={size} className=" text-green-900" />
      </Link>
    ),
    rabbitmq: (
      <Link target="_blank" href="https://www.rabbitmq.com/">
        <SiRabbitmq size={size} className=" text-orange-800" />
      </Link>
    ),
    tailwind: (
      <Link target="_blank" href="https://tailwindcss.com/docs/installation">
        <SiTailwindcss size={size} className=" text-blue-400" />
      </Link>
    ),
    typescript: (
      <Link target="_blank" href="https://www.typescriptlang.org/">
        <SiTypescript size={size} className=" text-blue-500" />
      </Link>
    ),
    vercel: (
      <Link target="_blank" href="https://vercel.com/">
        <SiVercel size={size} />
      </Link>
    ),
    socketio: (
      <Link target="_blank" href="https://socket.io/">
        <SiSocketdotio size={size} className=" text-orange-800" />
      </Link>
    ),
    react: (
      <Link target="_blank" href="https://react.dev/">
        <FaReact size={size} className=" text-blue-600" />
      </Link>
    ),
    vue: (
      <Link target="_blank" href="https://vuejs.org/">
        <FaVuejs size={size} className=" text-green-800" />
      </Link>
    ),
    redis: (
      <Link target="_blank" href="https://redis.io/">
        <DiRedis size={size} className=" text-red-500" />
      </Link>
    ),
  };
  return (
    <BasicCard className="relative cursor-pointer border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-800 lg:hover:scale-[102%]">
      <Link href={`/projects/${slug}`} prefetch passHref>
        {featured && (
          <div className="absolute right-0 top-0 z-[2] rounded-bl-xl rounded-tr-xl bg-emerald-300 px-2 py-1 text-[13px] font-medium text-emerald-950">
            Featured
          </div>
        )}
        <LazyLoadImg
          src={img}
          alt={slug}
          width={400}
          height={200}
          className="h-48 rounded-t-xl object-cover object-left"
        />
      </Link>
      <article className="space-y-2 p-5">
        <Link href={`/projects/${slug}`} prefetch passHref>
          <hgroup>
            <h1 className="font-sora cursor-pointer text-lg text-neutral-700 transition-all duration-300 dark:text-neutral-300 dark:hover:text-teal-400 lg:hover:text-teal-800">
              {title}
            </h1>
            <p className="text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-400">
              {desc.slice(0, 70) + (desc.length > 70 ? "..." : "")}
            </p>
          </hgroup>
        </Link>
        <nav className="flex flex-wrap items-center gap-3 pt-2">
          {stacks?.map((stack) => (
            <div key={stack} className="w-6">
              <BasicTooltip title={stack}>{techstacks[stack]}</BasicTooltip>
            </div>
          ))}
        </nav>
      </article>
    </BasicCard>
  );
}
