import Breakline from "@/components/atoms/contents/breakLine";
import Container from "@/components/atoms/contents/container";
import { Meteors } from "@/components/ui/meteors";
import type { ChildrenProps } from "@/interfaces";
import type { ReactNode } from "react";

export interface ContactLayoutProps extends ChildrenProps {
  social: ReactNode;
  form: ReactNode;
}

export default function ContactLayout({
  children,
  social,
  form,
}: ContactLayoutProps) {
  return (
    <Container data-aos="fade-left" as="section">
      <Meteors number={20} />
      {children}
      {social}
      <Breakline className="my-6" />
      {form}
    </Container>
  );
}

export const dynamic = "force-static";
