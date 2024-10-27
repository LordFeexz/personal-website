"use client";

import BlogCard from "@/components/organs/card/BlogCard";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import type { BlogData } from "@/constants/blog";
import useMounted from "@/hooks/useMounted";
import type { ChildrenProps, Lang } from "@/interfaces";
import { cn } from "@/libs/utils";
import { useParams, useRouter } from "next/navigation";
import {
  useCallback,
  useEffect,
  useState,
  type MouseEventHandler,
  createContext,
  type Dispatch,
  type SetStateAction,
  useContext,
  useMemo,
} from "react";

export const ITEMS_PER_PAGE = 10;

interface BlogPageContextProps {
  activeLang: Lang;
  setActiveLang: Dispatch<SetStateAction<Lang>>;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
  paginatedPosts: BlogData[];
}

const BlogPageContext = createContext<BlogPageContextProps>(
  {} as BlogPageContextProps
);

interface WrapperProps extends ChildrenProps {
  data: Record<Lang, BlogData[]>;
}

function Wrapper({ children, data }: WrapperProps) {
  const params = useParams();
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [activeLang, setActiveLang] = useState<Lang>("en");
  const totalPages = useMemo(
    () => Math.ceil(data[activeLang].length / ITEMS_PER_PAGE),
    [activeLang]
  );
  const paginatedPosts = useMemo(
    () =>
      data[activeLang].slice(
        (page - 1) * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE
      ),
    [page, activeLang]
  );

  useEffect(() => {
    if (params?.lang && ["en", "id"].includes(params.lang as Lang)) {
      setActiveLang(params.lang as Lang);
    } else {
      router.replace("/" + activeLang, { scroll: false });
    }
  }, [params]);

  return (
    <BlogPageContext.Provider
      value={{
        activeLang,
        setActiveLang,
        page,
        setPage,
        totalPages,
        paginatedPosts,
      }}
    >
      {children}
    </BlogPageContext.Provider>
  );
}

export interface ChangeLangProps {
  className?: string;
}

function ChangeLang({ className }: ChangeLangProps) {
  const router = useRouter();
  const mount = useMounted();
  const { setActiveLang, activeLang, setPage } = useContext(BlogPageContext);

  const handleLangChange = useCallback(
    (lang: Lang): MouseEventHandler =>
      (e) => {
        setActiveLang(lang);
        setPage(1);
        router.push("/blog/" + lang);
      },
    [activeLang]
  );

  return mount ? (
    <div className={cn(className, "md:space-x-2 space-y-2")}>
      <Button
        variant={activeLang === "en" ? "default" : "outline"}
        onClick={handleLangChange("en")}
        className="min-w-32"
      >
        English
      </Button>
      <Button
        variant={activeLang === "id" ? "default" : "outline"}
        onClick={handleLangChange("id")}
        className="min-w-32"
      >
        Indonesian
      </Button>
    </div>
  ) : null;
}

function BlogList() {
  const { paginatedPosts, activeLang } = useContext(BlogPageContext);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 group/blog-card">
      {paginatedPosts.map((content) => (
        <BlogCard
          key={content.name}
          data={content}
          lang={activeLang}
          className="group-hover/blog-card:[&:not(:hover)]:opacity-40"
        />
      ))}
    </div>
  );
}

function BlogPagination() {
  const { setPage, page, totalPages } = useContext(BlogPageContext);
  const handlePreviousPage: MouseEventHandler = useCallback(
    (e) => {
      e.preventDefault();
      setPage((prev) => Math.max(prev - 1, 1));
    },
    [page]
  );

  const handlePaginationLink = useCallback(
    (idx: number): MouseEventHandler =>
      (e) => {
        e.preventDefault();
        setPage(idx + 1);
      },
    [page]
  );

  const handleNextPage: MouseEventHandler = useCallback(
    (e) => {
      e.preventDefault();
      setPage((prev) => Math.min(prev + 1, totalPages));
    },
    [page]
  );

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={handlePreviousPage}
            className={cn(page === 1 && "pointer-events-none opacity-50")}
          ></PaginationPrevious>
        </PaginationItem>
        {[...Array(totalPages)].map((_, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              onClick={handlePaginationLink(i)}
              isActive={page === i + 1}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={handleNextPage}
            className={cn(
              page === totalPages && "pointer-events-none opacity-50"
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export { ChangeLang, BlogList, BlogPagination, Wrapper };
