import Container from "@/components/atoms/contents/container";
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
      {children}
      {career}
      {service}
      {tech}
    </Container>
  );
}
