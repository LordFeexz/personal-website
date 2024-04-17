import Container from "@/components/atoms/contents/container";
import PageHeading from "@/components/atoms/header/pageHeading";
import BackBtn from "@/components/molleculs/button/backBtn";
import { PROJECTS } from "@/constants/projects";
import type { PageProps } from "@/interfaces";
import Image from "next/image";
import { notFound } from "next/navigation";

export type AltPageProps = PageProps<
  { slug: string; alt: string },
  { readMode?: string }
>;

export default function Page({
  params: { slug, alt },
  searchParams,
}: AltPageProps) {
  const imgBySlug = PROJECTS.find((el) => el.slug === slug);
  if (!imgBySlug) notFound();

  const imgByAlt = imgBySlug.imgs.find((el) => el.alt === alt);
  if (!imgByAlt) notFound();

  return (
    <Container
      data-aos="fade-left"
      as="section"
      readMode={searchParams?.readMode?.toLowerCase() === "true"}
    >
      <BackBtn url={`/projects/${slug}`} />
      <PageHeading
        title={`Project ${imgBySlug.title} ${imgByAlt.alt} image`}
        desc={imgByAlt.desc}
      />
      <Image priority src={imgByAlt.url} alt={imgByAlt.alt} />
    </Container>
  );
}

export async function generateStaticParams() {
  const result: { slug: string; alt: string }[] = [];

  PROJECTS.forEach(({ slug, imgs }) => {
    imgs.forEach(({ alt }) => {
      result.push({
        slug,
        alt,
      });
    });
  });
  return result;
}

export function generateMetadata({ params }: AltPageProps) {
  const data = PROJECTS.find((el) => el.slug === params?.slug);
  const altImg = data?.imgs.find((el) => el.alt === params?.alt);

  return !!data && !!altImg
    ? {
        title: altImg.alt,
        description: altImg.desc,
        keywords: altImg.alt,
        alternates: {
          canonical: `${process.env.DOMAIN}/projects/${data.slug}/${altImg.alt}`,
        },
      }
    : {};
}
