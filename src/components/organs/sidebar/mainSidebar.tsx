import Breakline from "@/components/atoms/contents/breakLine";
import SidebarMenu from "@/components/molleculs/menu/sidebarMenu";
import Profile from "@/components/organs/contents/profile";
import { SIDEBAR_MENU } from "@/constants/sidebar";

export default function MainSidebar() {
  return (
    <aside className="sticky top-0 z-10 flex flex-col transition-all duration-300 lg:py-8">
      <Profile />
      <nav className="hidden md:block">
        <Breakline />
        <div className="hidden lg:block">
          <SidebarMenu lists={SIDEBAR_MENU} />
        </div>
        <Breakline />
      </nav>
    </aside>
  );
}
