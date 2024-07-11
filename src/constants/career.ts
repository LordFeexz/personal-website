import IndofundPNG from "@/components/images/Indofund-b.webp";
import FGJPG from "@/components/images/FgLogo.jpg";
import BalkanDreamPNG from "@/components/images/Balkan-Dreams-Logo.png";

export const CAREER = [
  {
    position: "Fullstack Developer",
    company: "ForumGamers",
    logo: FGJPG,
    location: "Remote/Indonesia",
    startDate: new Date("12-20-2022"),
    endDate: new Date("07-11-2024"),
    slug: "Forum-Gamers",
    responsibility: [
      "Initiate and setup all projects",
      "Successfully implemented a microservices architecture utilizing RPC (Remote Procedure Call) and a message broker to efficiently manage and orchestrate requests among services.",
      "Implemented caching mechanisms using Redis to enhance data retrieval speed and overall system performance",
      "Developed a real-time chat feature, enabling instant communication within the application. Optimized inter-service communication to enhance response times for users, ensuring efficient and seamless interactions between services.",
      "Utilized Next.js app router to implement server-side rendering, improving the application's SEO performance and providing a better user experience.",
      "Implemented server actions to uphold data security, ensuring that sensitive information is safeguarded while maintaining the integrity of the application's functionality.",
    ],
  },
  {
    position: "Backend Developer",
    company: "Indofund",
    logo: IndofundPNG,
    location: "Jakarta/Indonesia",
    startDate: new Date("01-24-2023"),
    slug: "Indofund",
    responsibility: [
      "Creating a customable authentication for each role to access an endpoint",
      "Refactoring the code to avoid vulnerability to injections attack and xss attack",
      "Integrating application to third party API",
      "Creating unit-test for existing feature and incoming feature",
      "Migrating to typescript",
      "Initilizing docker-compose for dev environment",
      "Reducing code complexity",
      "Reducing line code up to 40%",
      "Achieved a drastic reduction in response time through performance tuning and optimization strategies.",
      "Implemented Continuous Integration and Continuous Deployment (CI/CD) pipelines for streamlined development workflows.",
      "Led the migration of the codebase towards a semi-microservices architecture, enhancing scalability and maintainability.",
      "Successfully transitioned the codebase from JavaScript to TypeScript and Golang, leveraging the strengths of these languages for improved code quality and developer productivity.",
      "Implemented a message broker to substitute periodic cron jobs, thereby optimizing server load efficiency and enabling real-time event handling within the application.",
      "mplemented a message broker to introduce delayed messaging functionality, enabling the scheduling of messages for deferred processing.",
    ],
  },
  {
    position: "Fullstack Developer",
    company: "BalkanDreams",
    logo: BalkanDreamPNG,
    location: "Remote/Bosnia",
    startDate: new Date("03-01-2024"),
    slug: "Balkan-Dreams",
    responsibility: [],
    endDate: new Date("06-28-2024"),
  },
];
