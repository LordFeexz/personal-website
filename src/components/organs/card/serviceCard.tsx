"use client";

import { memo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import useMounted from "@/hooks/useMounted";
import InfinitySpin from "@/components/atoms/loaders/infinitySpin";

export interface ServiceCardProps {
  tag: string;
  title: string;
  desc: string;
}

function ServiceCard({ tag, title, desc }: ServiceCardProps) {
  const [hover, setHover] = useState<boolean>(false);
  const mount = useMounted();

  return (
    <Link href={`/service/${title}`} prefetch>
      {mount ? (
        <article
          className="min-w-[300px] overflow-hidden rounded-xl object-top object-contain bg-cover bg-center text-neutral-100 md:w-80"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            backgroundImage: `url('./images/service-backdrop.webp')`,
          }}
        >
          <div className="flex font-mono flex-col h-full w-full justify-center p-6 overflow-hidden">
            {hover ? (
              <motion.hgroup
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h3
                  className="mb-4 text-base font-bold text-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {title.replaceAll("-", " ")}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-xs text-gray-800 animate-enter-left"
                >
                  {desc.slice(0, 50) + (desc.length > 50 ? "..." : "")}
                </motion.p>
              </motion.hgroup>
            ) : (
              <motion.hgroup
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-md text-gray-800 animate-enter-left">
                  #{tag}
                </span>
                <h3 className="mt-2 text-3xl font-bold text-gray-800 animate-enter-left">
                  {title.replaceAll("-", " ")}
                </h3>
              </motion.hgroup>
            )}
          </div>
        </article>
      ) : (
        <InfinitySpin />
      )}
    </Link>
  );
}

export default memo(ServiceCard);
