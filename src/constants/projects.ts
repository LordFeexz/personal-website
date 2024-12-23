import FGFIGMA from "@/components/images/fg-figma-home.png";
import HACKPARKFLOW from "@/components/images/HackPark-flow.png";
import OLDPORTFOLIO from "@/components/images/old-portfolio-website.png";
import HACKPARKCHALLANGE from "@/components/images/challange.png";
import HACKPARKDESC from "@/components/images/desc.png";
import HACKAPARKSUCCESSSTORY from "@/components/images/success-story.png";
import HACKPARKTESTING from "@/components/images/testing.png";
import HACKPARKTIMELINE from "@/components/images/timeline.png";
import PERSONALWEBSITE from "@/components/images/personal-website.png";
import FACERECOGNITION from "@/components/images/face-recognition.jpg";
import FREXAMPLE1 from "@/components/images/face-recognition-example1.png";
import FREXAMPLE2 from "@/components/images/face-recognition-example2.png";
import MUKTACHAIN from "@/components/images/blockchain.png";
import SERENE from "@/components/images/Serene.jpeg";
import SERENETHERAPY from "@/components/images/serene-therapy.png";
import SERENEACTIVITY from "@/components/images/serene-activity.jpeg";
import SERENEHOSPITAL from "@/components/images/serene-nearby-clinic.png";
import SERENEMOODS from "@/components/images/serene-moods.png";
import CVSCOREHOME from "@/components/images/cv-score-home.png";
import CVSCOREGEN from "@/components/images/cv-score-gen.png";
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
    title: "CV Score",
    slug: "cv-score",
    desc: "check the match of your CV with job description automatically using AI. Your CV score will give you a score and detailed analysis, as well as suggestions to improve your CV.",
    stacks: ["remix", "vercel", "bun", "tailwind", "react"],
    featured: true,
    imgs: [
      {
        url: CVSCOREHOME,
        alt: "home page",
        desc: "home page",
      },
      {
        url: CVSCOREGEN,
        alt: "generate page",
        desc: "generate page",
      },
    ],
    thumbnail: CVSCOREHOME,
    live: "https://www.skor-cv-mu.my.id?lang=id",
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
    title: "Personal Website",
    slug: "personal-website",
    desc: "My Personal Website that build with next js",
    stacks: ["nextjs", "react", "bun", "tailwind"],
    featured: true,
    imgs: [
      {
        url: PERSONALWEBSITE,
        alt: "personal-website",
        desc: "My new personal website",
      },
    ],
    thumbnail: PERSONALWEBSITE,
    repo: "https://github.com/LordFeexz/personal-website",
  },
  {
    title: "Portfolio website (old)",
    slug: "portfolio-website-old",
    desc: "My old portfolio website that build with astro js",
    stacks: ["astro", "react", "nodejs", "tailwind"],
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
  {
    title: "Mukta Chain",
    slug: "mukta-chain",
    desc: "a TODO blockchain app in rust",
    repo: "https://github.com/LordFeexz/mukta-chain",
    thumbnail: MUKTACHAIN,
    imgs: [
      {
        url: MUKTACHAIN,
        alt: "mukta-chain",
        desc: "mukta chain",
      },
    ],
    stacks: ["rust"],
  },
  {
    title: "Face Recognition Ai",
    slug: "face-recognition-ai",
    desc: "a simple face recognition app using python and opencv",
    repo: "https://github.com/LordFeexz/simple-face-reconigtion",
    thumbnail: FACERECOGNITION,
    imgs: [
      {
        url: FACERECOGNITION,
        alt: "face-recognition-ai",
        desc: "Face recognition ai",
      },
      {
        url: FREXAMPLE1,
        alt: "face-recognition-ai-example-1",
        desc: "Face recognition ai example 1",
      },
      {
        url: FREXAMPLE2,
        alt: "face-recognition-ai-example-2",
        desc: "Face recognition ai example 2",
      },
    ],
    stacks: ["python"],
  },
  {
    title: "Serene Apps",
    slug: "serene-apps",
    desc: "is an application that measures your mental health. It has tools for relaxing, mental health testing, and more.",
    thumbnail: SERENE,
    stacks: ["golang", "react", "postgres"],
    imgs: [
      {
        url: SERENE,
        alt: "serene-apps",
        desc: "serene apps logo image",
      },
      {
        url: SERENEACTIVITY,
        alt: "serene-activity",
        desc: "serene apps activity page image",
      },
      {
        url: SERENEHOSPITAL,
        alt: "serene-hospital",
        desc: "serene apps search nearby clinic page image",
      },
      {
        url: SERENEMOODS,
        alt: "serene-moods",
        desc: "serene apps moods page image",
      },
      {
        url: SERENETHERAPY,
        alt: "serene-therapy",
        desc: "serene apps therapy page image",
      },
    ],
    live: "https://expo.dev/artifacts/eas/hER6s1SHkg2daxSpNUFc6s.apk",
  },
];
