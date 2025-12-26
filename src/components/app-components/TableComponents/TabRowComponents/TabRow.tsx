"use client";
import { TableCell, TableRow } from "@/components/ui/table";
import { Token } from "@/lib/interface/tokens";
import { memo, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import TokenMedia from "./TokenComponents/TokenMedia";
import TabRowName from "./TokenComponents/TabRowName";
import TokenCaps from "./TokenComponents/TokenCaps";
import TokenInfoGrid from "./TokenComponents/TokenInfoGrid";

interface TabRowProps {
  token: Token;
}

const TabRow = memo(({ token }: TabRowProps) => {
  return (
    <TableRow className="border-b border-border hover:bg-rowhover cursor-pointer transition-colors">
      <TableCell className="p-0">
        <div className="flex flex-row w-full gap-2 pl-2 pr-2 pt-2 pb-1 items-start">
          <TokenMedia token={token} />

          <div className="flex flex-row flex-1 justify-between items-start">
            <div className="flex flex-col gap-1.5">
              <TabRowName token={token} />
              <TokenInfoGrid token={token} />
            </div>

            <TokenCaps token={token} />
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
});

function Badge({
  icon,
  value,
  isPositive,
}: {
  icon: string;
  value: string;
  isPositive: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const colorSuffix = isPositive ? "-green" : "-red";

  return (
    <div
      className="flex flex-row gap-[4px] h-[24px] px-[6px] items-center rounded-full bg-backgroundSecondary border border-white/5 transition-all hover:border-white/20 cursor-help"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`${icon}${colorSuffix}.svg`}
        alt="badge"
        className="w-[14px] h-[14px] object-contain"
      />
      <span
        className={cn(
          "text-[11px] font-semibold",
          isPositive ? "text-primaryGreen" : "text-primaryRed"
        )}
      >
        {value}
      </span>
    </div>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  const [isHovered, setIsHovered] = useState(false);

  // Mapping some remix names to your local filenames if they differ
  const iconMap: Record<string, string> = {
    x: "X",
    telegram: "telegram",
    world: "world",
    search: "search",
    pin: "pin",
    feather: "feather",
  };

  const fileName = iconMap[icon.toLowerCase()] || icon;

  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? `/${fileName}-blue.svg` : `/${fileName}.svg`}
        alt={icon}
        className="w-[16px] h-[16px] transition-all duration-150"
      />
    </div>
  );
}

TabRow.displayName = "TabRow";
export default TabRow;
