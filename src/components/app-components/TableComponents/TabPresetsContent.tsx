"use client";
import {
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from "@/components/ui/menubar";
import { useAppSelector } from "@/lib/hooks";

export default function TabPresetsContent() {
  const { slippage, priority, bribe } = useAppSelector((state) => state.trade);
  return (
    <MenubarContent className="min-w-[4rem]">
      <MenubarItem className="text-xs py-1 px-2">{slippage}%</MenubarItem>
      <MenubarItem className="text-xs py-1 px-2">{priority}</MenubarItem>
      <MenubarItem className="text-xs py-1 px-2">{bribe}</MenubarItem>
      <MenubarItem className="text-xs py-1 px-2">off</MenubarItem>
    </MenubarContent>
  );
}
