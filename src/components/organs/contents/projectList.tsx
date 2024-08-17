"use client";

import { motion } from "framer-motion";
import ProjectCard from "../card/projectCard";
import { PROJECTS } from "@/constants/projects";
import { memo, useMemo } from "react";

function ProjectsList() {
  const datas = useMemo(() => PROJECTS, []);
  return (
    <section className="grid gap-2 pt-2 sm:grid-cols-2">
      {datas.map((el, idx) => (
        <motion.div
          key={el.title}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: idx * 0.1 }}
        >
          <ProjectCard {...el} img={el.thumbnail} />
        </motion.div>
      ))}
    </section>
  );
}

export default memo(ProjectsList);
