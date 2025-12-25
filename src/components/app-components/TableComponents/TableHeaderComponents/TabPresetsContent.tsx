"use client";
import { MenubarContent } from "@/components/ui/menubar";
import { useAppSelector } from "@/lib/hooks";
import { MenubarIconItem } from "../../ComonComponents/MenubarItem";

export default function TabPresetsContent({ presetId }: { presetId: string }) {
  const settings = useAppSelector((state) => state.presets.presets[presetId]);

  if (!settings) return null;

  const { slippage, priority, bribe, mevMode } = settings;

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
