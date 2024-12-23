import type { ReactNode } from "react";
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
  SiRust,
  SiBun,
  SiRemix,
} from "@/components/atoms/icons/stacks";
import { LinkPreview } from "@/components/ui/link-preview";

const size = "100%";
export const TECHSTACKS: Record<string, ReactNode> = {
  golang: (
    <LinkPreview url="https://go.dev/">
      <BiLogoGoLang size={size} className="text-cyan-300" />
    </LinkPreview>
  ),
  postgres: (
    <LinkPreview url="https://www.postgresql.org/">
      <BiLogoPostgresql size={size} className=" text-blue-900" />
    </LinkPreview>
  ),
  remix: (
    <LinkPreview url="https://remix.run">
      <SiRemix size={size} />
    </LinkPreview>
  ),
  python: (
    <LinkPreview url="https://www.python.org/">
      <BiLogoPython size={size} className=" text-blue-800" />
    </LinkPreview>
  ),
  redux: (
    <LinkPreview url="https://redux.js.org/">
      <BiLogoRedux size={size} className=" text-purple-500" />
    </LinkPreview>
  ),
  astro: (
    <LinkPreview url="https://astro.build/">
      <SiAstro size={size} className=" text-red-600" />
    </LinkPreview>
  ),
  bootstrap: (
    <LinkPreview url="https://getbootstrap.com/">
      {" "}
      <SiBootstrap size={size} className=" text-purple-700" />
    </LinkPreview>
  ),
  cassandra: (
    <LinkPreview url="https://cassandra.apache.org/_/index.html">
      <SiApachecassandra size={size} className=" text-blue-300" />
    </LinkPreview>
  ),
  css: (
    <LinkPreview url="https://devdocs.io/css/">
      <SiCss3 size={size} className=" text-blue-400" />
    </LinkPreview>
  ),
  django: (
    <LinkPreview url="https://www.djangoproject.com/">
      <SiDjango size={size} className=" text-green-900" />
    </LinkPreview>
  ),
  elasticSearch: (
    <LinkPreview url="https://www.elastic.co/elasticsearch">
      <SiElasticsearch size={size} className=" text-green-500" />
    </LinkPreview>
  ),
  express: (
    <LinkPreview url="https://expressjs.com/">
      <SiExpress size={size} className=" text-yellow-500" />
    </LinkPreview>
  ),
  firebase: (
    <LinkPreview url="https://firebase.google.com/">
      <SiFirebase size={size} className=" text-yellow-600" />
    </LinkPreview>
  ),
  graphql: (
    <LinkPreview url="https://graphql.org/">
      <SiGraphql size={size} className=" text-pink-500" />
    </LinkPreview>
  ),
  heroku: (
    <LinkPreview url="https://www.heroku.com/">
      <SiHeroku size={size} className=" text-purple-900" />
    </LinkPreview>
  ),
  html: (
    <LinkPreview url="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">
      <SiHtml5 size={size} className=" text-orange-700" />
    </LinkPreview>
  ),
  mongoDb: (
    <LinkPreview url="https://www.mongodb.com/">
      <SiMongodb size={size} className=" text-green-500" />
    </LinkPreview>
  ),
  mongoose: (
    <LinkPreview url="https://mongoosejs.com/">
      <SiMongoose size={size} className=" text-red-500" />
    </LinkPreview>
  ),
  mySql: (
    <LinkPreview url="https://www.mysql.com/">
      <SiMysql size={size} className=" text-blue-600" />
    </LinkPreview>
  ),
  nestjs: (
    <LinkPreview url="https://nestjs.com/">
      <SiNestjs size={size} className=" text-red-600" />
    </LinkPreview>
  ),
  netlify: (
    <LinkPreview url="https://www.netlify.com/">
      <SiNetlify size={size} />
    </LinkPreview>
  ),
  nextjs: (
    <LinkPreview url="https://nextjs.org/">
      <SiNextdotjs size={size} />
    </LinkPreview>
  ),
  nodejs: (
    <LinkPreview url="https://nodejs.org/en">
      <SiNodedotjs size={size} className=" text-green-900" />
    </LinkPreview>
  ),
  rabbitmq: (
    <LinkPreview url="https://www.rabbitmq.com/">
      <SiRabbitmq size={size} className=" text-orange-800" />
    </LinkPreview>
  ),
  tailwind: (
    <LinkPreview url="https://tailwindcss.com/docs/installation">
      <SiTailwindcss size={size} className=" text-blue-400" />
    </LinkPreview>
  ),
  typescript: (
    <LinkPreview url="https://www.typescriptlang.org/">
      <SiTypescript size={size} className=" text-blue-500" />
    </LinkPreview>
  ),
  vercel: (
    <LinkPreview url="https://vercel.com/">
      <SiVercel size={size} />
    </LinkPreview>
  ),
  socketio: (
    <LinkPreview url="https://socket.io/">
      <SiSocketdotio size={size} className=" text-orange-800" />
    </LinkPreview>
  ),
  react: (
    <LinkPreview url="https://react.dev/">
      <FaReact size={size} className=" text-blue-600" />
    </LinkPreview>
  ),
  vue: (
    <LinkPreview url="https://vuejs.org/">
      <FaVuejs size={size} className=" text-green-800" />
    </LinkPreview>
  ),
  redis: (
    <LinkPreview url="https://redis.io/">
      <DiRedis size={size} className=" text-red-500" />
    </LinkPreview>
  ),
  rust: (
    <LinkPreview url="https://www.rust-lang.org/">
      <SiRust size={size} className="text-orange-500" />
    </LinkPreview>
  ),
  bun: (
    <LinkPreview url="https://bun.dev/">
      <SiBun size={size} className=" text-yellow-500" />
    </LinkPreview>
  ),
};
