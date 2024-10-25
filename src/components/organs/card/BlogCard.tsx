import LazyLoadImg from "@/components/atoms/image/lazyLoadImg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BlogData } from "@/constants/blog";
import type { Lang } from "@/interfaces";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { memo } from "react";

export interface BlogCardProps {
  data: BlogData;
  lang: Lang;
  className?: string;
}

function BlogCard({ data, lang, className }: BlogCardProps) {
  return (
    <Card
      className={cn(
        "flex flex-col",
        className,
        "hover:scale-105 transition-all duration-300",
        "shadow-sm hover:shadow-lg"
      )}
    >
      <CardHeader>
        <LazyLoadImg
          src={data.image}
          alt={data.name}
          width={400}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <CardTitle className="mt-4">
          <Link
            href={`/blog/${lang}/${data.slug}`}
            prefetch
            className="text-xl hover:underline"
          >
            {data.name}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {data.keywords.slice(0, 5).map((keyword) => (
            <span
              key={keyword}
              className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full"
            >
              {keyword}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default memo(BlogCard);
