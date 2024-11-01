import { memo } from "react";
import MenuItem, { type MenuItemProps } from "./menuItem";

export interface SidebarMenuProps {
  title?: string;
  lists: MenuItemProps[];
}

function SidebarMenu({ title, lists }: SidebarMenuProps) {
  return (
    <nav className="flex flex-col space-y-1 lg:p-0">
      {title && (
        <header className="font-sora mb-2 ml-2 mt-1 hidden text-sm text-neutral-600 dark:text-neutral-500 lg:block">
          {title}
        </header>
      )}
      {lists?.map((item) => (
        <MenuItem key={item.title} {...item} />
      ))}
    </nav>
  );
}

export default memo(SidebarMenu);
