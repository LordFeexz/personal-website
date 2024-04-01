import { motion } from "framer-motion";
import Breakline from "@/components/atoms/contents/breakLine";
import { SIDEBAR_MENU } from "@/constants/sidebar";
import SidebarMenu from "./sidebarMenu";

export default function MobileSidebarMenu() {
  return (
    <motion.nav
      className="my-3 flex h-screen flex-col"
      initial={{ y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <Breakline className="mt-2" />
        <SidebarMenu lists={SIDEBAR_MENU} />
      </div>
    </motion.nav>
  );
}
