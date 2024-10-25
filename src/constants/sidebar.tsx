import type { SidebarMenu } from "@/interfaces/components";
import {
  ContactIcon,
  HomeIcon,
  ProfileIcon,
  ProjectIcon,
  BlogIcon,
} from "@/components/atoms/icons/react-icons-bi";
import { FaServicestack } from "@/components/atoms/icons/react-icons-fa";

export const SIDEBAR_MENU: SidebarMenu[] = [
  {
    title: "Home",
    href: "/",
    icon: <HomeIcon size={20} />,
  },
  {
    title: "About",
    href: "/about",
    icon: <ProfileIcon size={20} />,
  },
  {
    title: "Blog",
    href: "/blog/en",
    icon: <BlogIcon size={20} />,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: <ProjectIcon size={20} />,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: <ContactIcon size={20} />,
  },
  {
    title: "Services",
    href: "/service",
    icon: <FaServicestack size={20} />,
  },
];
