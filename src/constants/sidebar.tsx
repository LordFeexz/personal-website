import type { SidebarMenu } from "@/interfaces/components";
import {
  ContactIcon,
  HomeIcon,
  ProfileIcon,
  ProjectIcon,
} from "@/components/atoms/icons/react-icons-bi";
import { FaServicestack } from "@/components/atoms/icons/react-icons-fa";

export const SIDEBAR_MENU: SidebarMenu[] = [
  {
    title: "Home",
    href: "/",
    icon: <HomeIcon size={20} />,
    isExternal: false,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: <ProjectIcon size={20} />,
    isExternal: false,
  },
  {
    title: "About",
    href: "/about",
    icon: <ProfileIcon size={20} />,
    isExternal: false,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: <ContactIcon size={20} />,
    isExternal: false,
  },
  {
    title: "Services",
    href: "/service",
    icon: <FaServicestack size={20} />,
    isExternal: false,
  },
];
