import Container from "@/components/atoms/contents/container";
import PageHeading from "@/components/atoms/header/pageHeading";
import BackBtn from "@/components/molleculs/button/backBtn";
import { PROJECTS } from "@/constants/projects";
import type { PageProps } from "@/interfaces";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function Page({
  params: { slug, alt },
}: PageProps<{ slug: string; alt: string }>) {
  const imgBySlug = PROJECTS.find((el) => el.slug === slug);
  if (!imgBySlug) notFound();

  const imgByAlt = imgBySlug.imgs.find((el) => el.alt === alt);
  if (!imgByAlt) notFound();

  return (
    <Container data-aos="fade-left">
      <BackBtn url={`/projects/${slug}`} />
      <PageHeading
        title={`Project ${imgBySlug.title} ${imgByAlt.alt} image`}
        desc={imgByAlt.desc}
      />
      <Image priority src={imgByAlt.url} alt={imgByAlt.alt} />
    </Container>
  );
}
