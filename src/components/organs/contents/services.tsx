"use client";

import { SERVICES } from "@/constants/services";
import { motion } from "framer-motion";
import ServiceDetailCard from "../card/servicesDetailCard";
import { memo, useMemo } from "react";

function ServicesPage() {
  const datas = useMemo(() => SERVICES, []);

  return (
    <section className="grid gap-5 pt-2 sm:grid-cols-2">
      {datas.map((el, idx) => (
        <motion.div
          key={el.title}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: idx * 0.1 }}
        >
          <ServiceDetailCard {...el} />
        </motion.div>
      ))}
    </section>
  );
}

export default memo(ServicesPage);
