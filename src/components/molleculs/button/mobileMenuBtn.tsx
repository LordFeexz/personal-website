import clsx from "clsx";
import type { Dispatch, SetStateAction } from "react";
import styled from "@emotion/styled";
import { GiHamburgerMenu } from "@/components/atoms/icons/react-icons-gi";
import { MdMenuOpen } from "@/components/atoms/icons/react-icons-md";

const StyledMenuSpan = styled.span`
  width: 100%;
  height: 3px;
  transition: all 0.5s ease;
  border-radius: 10px;

  &.active:nth-of-type(1),
  &.active:nth-of-type(3) {
    transform-origin: left;
  }
  &.active:nth-of-type(1) {
    transform: rotate(45deg);
  }
  &.active:nth-of-type(2) {
    width: 0;
  }
  &.active:nth-of-type(3) {
    transform: rotate(-45deg);
  }
`;

export interface MobileMenuButtonProps {
  expand: boolean;
  setExpand: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenuButton({
  expand,
  setExpand,
}: MobileMenuButtonProps) {
  const toggle = () => setExpand(!expand);

  const menu = [{ index: 1 }, { index: 2 }, { index: 3 }];

  return !expand ? (
    <GiHamburgerMenu
      className="flex lg:hidden flex-col justify-between h-[21px] w-[26px] cursor-pointer"
      onClick={toggle}
    />
  ) : (
    <MdMenuOpen
      className="flex lg:hidden flex-col justify-between h-[21px] w-[26px] cursor-pointer"
      onClick={toggle}
    >
      {menu.map(({ index }) => (
        <StyledMenuSpan
          key={index}
          className={clsx(
            "bg-neutral-950 dark:bg-neutral-100 ",
            expand && "active"
          )}
        />
      ))}
    </MdMenuOpen>
  );
}
