import Container from "@/components/atoms/contents/container";
import { Meteors } from "@/components/ui/meteors";
import { BLOG_DATAS } from "@/constants/blog";
import { Suspense } from "react";
import {
  Wrapper,
  BlogList,
  ChangeLang,
  BlogPagination,
} from "./components/wrapper";
import type { Metadata } from "next";

export default function Page() {
  return (
    <Container
      className="container mx-auto px-4 py-8"
      data-aos="fade-left"
      data-aos-duration="300"
      as="section"
    >
      <Meteors number={20} />
      <Suspense>
        <Wrapper data={BLOG_DATAS}>
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Blog Posts</h1>
            <Suspense>
              <ChangeLang />
            </Suspense>
          </header>
          <BlogList />
          <BlogPagination />
        </Wrapper>
      </Suspense>
    </Container>
  );
}

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Ananda Fiqri Blog",
  description: "My Blog Posts",
  keywords: [
    "blog",
    "posts",
    "learning",
    "development",
    "web development",
    "software development",
  ],
};
