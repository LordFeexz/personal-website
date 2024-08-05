import Container from "@/components/atoms/contents/container";
import { Meteors } from "@/components/ui/meteors";
import { TracingBeam } from "@/components/ui/tracing-beam";
import type { ChildrenProps } from "@/interfaces";
import type { ReactNode } from "react";

export interface HomeLayoutProps extends ChildrenProps {
  career: ReactNode;
  tech: ReactNode;
  service: ReactNode;
}

export default function HomeLayout({
  children,
  service,
  career,
  tech,
}: HomeLayoutProps) {
  return (
    <Container data-aos="fade-left">
      <TracingBeam>
        <Meteors number={20} />
        {children}
        {career}
        {service}
        {tech}
      </TracingBeam>
    </Container>
  );
}
