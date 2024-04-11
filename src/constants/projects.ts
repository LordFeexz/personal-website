import FGFIGMA from "@/components/images/fg-figma-home.png";
import HACKPARKFLOW from "@/components/images/HackPark-flow.png";
import OLDPORTFOLIO from "@/components/images/old-portfolio-website.png";
import HACKPARKCHALLANGE from "@/components/images/challange.png";
import HACKPARKDESC from "@/components/images/desc.png";
import HACKAPARKSUCCESSSTORY from "@/components/images/success-story.png";
import HACKPARKTESTING from "@/components/images/testing.png";
import HACKPARKTIMELINE from "@/components/images/timeline.png";
import type { MyProjects } from "@/interfaces/projects";

export const PROJECTS: MyProjects[] = [
  {
    title: "Forum Gamers",
    slug: "forum-gamers",
    desc: "Welcome to ForumGamers The Social Media Platform for you,Gamers!.Looking to elevate your gaming experience? ForumGamers is here to provide a complete solution for gamers. Find the perfect teammates, host exciting tournaments, and securely transact in-game. Join now and achieve great feats with our community!",
    stacks: [
      "nestjs",
      "rabbitmq",
      "typescript",
      "graphql",
      "nodejs",
      "mongoDb",
      "nextjs",
      "tailwind",
      "redis",
      "golang",
      "postgres",
      "cassandra",
    ],
    featured: true,
    imgs: [
      {
        url: FGFIGMA,
        alt: "forum-gamers-figma",
        desc: "Forum Gamers Initial Figma Design",
      },
    ],
    repo: "https://github.com/forumGamers",
    thumbnail: FGFIGMA,
  },
  {
    title: "Hackpark",
    slug: "hackpark",
    desc: "Introducing The Ultimate Solution for Drivers Tired of the Parking Hassle!.Say goodbye to parking headaches! With HackPark, you can effortlessly book your parking spot and make payments seamlessly, all with a quick scan of the QR Code. Enjoy a hassle-free parking experience today!.",
    stacks: [
      "express",
      "graphql",
      "nodejs",
      "react",
      "mongoDb",
      "postgres",
      "redis",
    ],
    featured: false,
    imgs: [
      {
        url: HACKPARKFLOW,
        alt: "hackpark-flow",
        desc: "hackpark designed app flow",
      },
      {
        url: HACKPARKCHALLANGE,
        alt: "hackpark-challange",
        desc: "hackpark challange story",
      },
      {
        url: HACKAPARKSUCCESSSTORY,
        alt: "hackpark-success-story",
        desc: "hackpark success story",
      },
      {
        url: HACKPARKDESC,
        alt: "hackpark-description",
        desc: "what hackpark actually is?",
      },
      {
        url: HACKPARKTESTING,
        alt: "hackpark-testing",
        desc: "hackpark unit testing result",
      },
      {
        url: HACKPARKTIMELINE,
        alt: "hackpark-timeline",
        desc: "hackpark work timeline",
      },
    ],
    repo: "https://github.com/LordFeexz/Hackpark",
    thumbnail: HACKPARKFLOW,
  },
  {
    title: "Portfolio website (old)",
    slug: "portfolio-website-old",
    desc: "My old portfolio website that build with astro js",
    stacks: ["astro", "react", "nodejs"],
    featured: false,
    imgs: [
      {
        url: OLDPORTFOLIO,
        alt: "old-portfolio",
        desc: "my old portfolio website",
      },
    ],
    repo: "https://github.com/LordFeexz/portfolio",
    live: "https://ananda-fiqri.vercel.app/",
    thumbnail: OLDPORTFOLIO,
  },
];
