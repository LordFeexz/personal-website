import Container from "@/components/atoms/contents/container";
import type { ChildrenProps } from "@/interfaces";
import type { ReactNode } from "react";

export interface HomeLayoutProps extends ChildrenProps {
  career: ReactNode;
  tech: ReactNode;
}

export default function HomeLayout({
  children,
  career,
  tech,
}: HomeLayoutProps) {
  return (
    <Container data-aos="fade-left">
      {children}
      {career}
      {tech}
    </Container>
  );
}
