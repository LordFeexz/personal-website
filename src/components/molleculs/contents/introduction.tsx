import TypographAnimation from "@/components/atoms/typography/typograph-animation";

export default function Introduction() {
  return (
    <section className="space-y-2 bg-cover bg-no-repeat">
      <header className="flex items-center justify-between">
        <div className="font-sora flex flex-row justify-between text-2xl font-medium lg:text-3xl">
          <TypographAnimation
            sequence={[
              "Hi i'm Ananda Fiqri",
              "Hi i'm a Fullstack Developer",
              "Great to see you",
            ]}
          />
        </div>
      </header>
      <article className="space-y-4">
        <ul className="ml-5 flex list-disc flex-col gap-1 text-neutral-700 dark:text-neutral-400 lg:flex-row lg:gap-8">
          <li>Software Developer</li>
          <li>
            Based in Indonesia <span className="ml-1">🇮🇩</span>
          </li>
        </ul>
        <p className="leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose">
          A passionate Fullstack developer poised to craft robust, secure, and
          seamlessly performing web applications. Proficient in using node.js,
          golang,rust and python for comprehensive full-stack development.
        </p>
      </article>
    </section>
  );
}
