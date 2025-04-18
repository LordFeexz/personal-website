"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlockViews from "./codeBlockViews";
import type { ChildrenProps } from "@/interfaces";
import { memo } from "react";

const Table = memo(({ children }: ChildrenProps) => (
  <div className="table-container">
    <table className="table w-full">{children}</table>
  </div>
));

function ReadMeView({ children }: ChildrenProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: (props) => (
          <a
            className="cursor-pointer text-teal-600 hover:text-teal-400 hover:underline"
            target="_blank"
            {...props}
          />
        ),
        p: (props) => <div {...props} className="font-sans" />,
        h2: (props) => (
          <h2
            className="font-sans text-xl font-medium dark:text-neutral-300"
            {...props}
          />
        ),
        h3: (props) => (
          <h3
            className="pt-4 text-[18px] font-medium leading-snug dark:text-neutral-300"
            {...props}
          />
        ),
        ul: (props) => (
          <ul className="list-disc space-y-3 pb-5 pl-10 font-sans" {...props} />
        ),
        ol: (props) => (
          <ol
            className="list-decimal space-y-3 pb-5 pl-10 font-sans"
            {...props}
          />
        ),
        code: (props: any) => <CodeBlockViews {...props} />,
        blockquote: (props) => (
          <blockquote
            className="text-md rounded-lg border-l-[5px] border-neutral-700 border-l-cyan-500 bg-neutral-100 py-3 pl-6 text-cyan-800 dark:bg-neutral-800 dark:text-cyan-200"
            {...props}
          />
        ),
        table: (props: any) => <Table {...props} />,
        th: (props) => (
          <th className="border px-3 py-1 text-left dark:border-neutral-600">
            {props.children}
          </th>
        ),
        td: (props) => (
          <td className="border px-3  py-1 dark:border-neutral-600">
            {props.children}
          </td>
        ),
      }}
    >
      {children as string}
    </ReactMarkdown>
  );
}

export default memo(ReadMeView);
