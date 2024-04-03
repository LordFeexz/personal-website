import FGFIGMA from "@/components/images/fg-figma-home.png";
import HACKPARKFLOW from "@/components/images/HackPark-flow.png";
import OLDPORTFOLIO from "@/components/images/old-portfolio-website.png";

export const PROJECTS = [
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
    img: FGFIGMA,
    repo: "https://github.com/forumGamers",
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
    img: HACKPARKFLOW,
    repo: "https://github.com/LordFeexz/Hackpark",
  },
  {
    title: "Portfolio website (old)",
    slug: "portfolio-website-old",
    desc: "My old portfolio website that build with astro js",
    stacks: ["astro", "react", "nodejs"],
    featured: false,
    img: OLDPORTFOLIO,
    repo: "https://github.com/LordFeexz/portfolio",
    live: "https://ananda-fiqri.vercel.app/",
  },
];
