"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  BsCloudMoon,
  BsCloudSun,
} from "@/components/atoms/icons/react-icons-bs";
import useMounted from "@/hooks/useMounted";
import { memo, useCallback } from "react";

function ThemeToggleBtn() {
  const { setTheme, resolvedTheme } = useTheme();
  const mount = useMounted();

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  }, [resolvedTheme, setTheme]);

  return !mount ? null : (
    <motion.button
      id="dark-mode-switcher"
      aria-label="Toggle Theme"
      onClick={toggleTheme}
      className={`rounded-xl p-2 ${
        resolvedTheme === "light" ? "bg-white" : "bg-neutral-800"
      }`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {resolvedTheme === "light" ? <BsCloudSun /> : <BsCloudMoon />}
    </motion.button>
  );
}

export default memo(ThemeToggleBtn);
