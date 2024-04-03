import Container from "@/components/atoms/contents/container";
import BackBtn from "@/components/molleculs/button/backBtn";
import ExperienceDetail from "@/components/organs/contents/experienceDetail";
import { CAREER } from "@/constants/career";
import type { PageProps } from "@/interfaces";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export default function Page({ params }: PageProps<{ slug: string }>) {
  const data = CAREER.find((el) => el.slug === params?.slug);
  if (!data) notFound();

  return (
    <Container data-aos="fade-left">
      <BackBtn url="/" />
      <ExperienceDetail {...data} />
    </Container>
  );
}

export function generateMetadata({
  params,
}: PageProps<{ slug: string }>): Metadata {
  const data = CAREER.find((el) => el.slug === params?.slug);
  return !!data
    ? {
        title: `Experience ${data.position} at ${data.company}`,
        description: `My carreer at ${data.company}`,
        keywords: `Ananda Fiqri experience ${data.position} at ${data.company} in detail`,
        alternates: {
          canonical: `${process.env.DOMAIN}/experience/${data.slug}`,
        },
      }
    : {};
}
