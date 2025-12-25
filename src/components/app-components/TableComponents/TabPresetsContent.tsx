"use client";
import { MenubarContent } from "@/components/ui/menubar";
import { useAppSelector } from "@/lib/hooks";
import { MenubarIconItem } from "../ComonComponents/MenubarItem";

export default function TabPresetsContent() {
  const { slippage, priority, bribe } = useAppSelector((state) => state.trade);
  const { mevMode } = useAppSelector((state) => state.mevMode);
  const presetItems = [
    { label: `${slippage}%`, path: "man.svg" },
    { label: priority, path: "gas.svg" },
    { label: bribe, path: "coin.svg" },
    { label: mevMode, path: "shield-double.svg" },
  ];
  return (
    <MenubarContent className="min-w-[4rem]">
      {presetItems.map((item, index) => (
        <MenubarIconItem
          key={index}
          path={item.path}
          className="text-muted-foreground"
        >
          {item.label}
        </MenubarIconItem>
      ))}
    </MenubarContent>
  );
}
