"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectActiveTab, setActiveTab } from "@/lib/features/ui/uiSlice";
import {
  List,
  ChevronDown,
  BoxIcon,
  Wallet,
  CircleQuestionMark,
  Keyboard,
  BookmarkX,
  ChevronUp,
  Settings,
  Volume2,
  CirclePlus,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import CustomBadge from "./CustomBadge";
import { GenericTooltip } from "../TableComponents/TabRowComponents/Tooltip/GenericTooltip";
import WalletBadge from "./WalletBadge";
import { cn } from "@/lib/utils";
import MobileDropDown from "../MobileComponents/MobileDropDown";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector(selectActiveTab);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = ["New Pairs", "Final Stretch", "Migrated"];

  const components = [
    {
      icon: <CircleQuestionMark size={17} className="text-foreground/60" />,
      tooltip: "Display",
    },
    {
      icon: (
        <CustomBadge
          icon1={<List className="text-foreground" size={15}></List>}
          icon2={
            <ChevronDown className="text-foreground" size={15}></ChevronDown>
          }
          label="Display"
        ></CustomBadge>
      ),
      tooltip: "Display",
    },
    {
      icon: (
        <BookmarkX size={17} className="cursor-pointer text-foreground/80" />
      ),
      tooltip: "Blacklist dev, handle, keywords",
    },
    {
      icon: (
        <Keyboard size={17} className="cursor-pointer text-foreground/80" />
      ),
      tooltip: "Pulse Hotkeys",
    },
    {
      icon: <Volume2 size={17} className="cursor-pointer text-foreground/80" />,
      tooltip: "Alerts",
    },
    {
      icon: (
        <CirclePlus size={17} className="cursor-pointer text-foreground/80" />
      ),
      tooltip: "Snipe Settings",
    },
    {
      icon: (
        <WalletBadge
          icon1={
            <Wallet size={17} className="cursor-pointer text-foreground/80" />
          }
          value1={1}
          icon2={
            <Image
              src="/solanaLogoMark.svg"
              alt="solana"
              width={14}
              height={14}
              className="opacity-90"
            />
          }
          value2={0}
        />
      ),
      tooltip: "Active Wallet",
    },
  ];

  return (
    <div className="flex flex-col mb-4 gap-2">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Branding */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <h2 className="text-xl font-semibold">Pulse</h2>
          <div className="rounded-full bg-table p-2 w-8 h-8 flex items-center justify-center">
            <Image
              src="/solanaLogoMark.svg"
              alt="solana"
              width={15}
              height={15}
            />
          </div>
          <BoxIcon size={15} className="text-yellow-400" />
        </div>

        {/* Middle: Tabs for Mobile/Tablet */}
        <div className="flex lg:hidden flex-1 items-center gap-1 overflow-x-auto no-scrollbar min-w-0 pr-2">
          {tabs.map((tab) => (
            <CustomBadge
              key={tab}
              label={tab}
              className={cn(
                "cursor-pointer hover:bg-rowhover transition-all whitespace-nowrap px-3 py-1 h-7",
                activeTab === tab
                  ? "bg-badges border border-border"
                  : "bg-transparent opacity-60"
              )}
              onClick={() => dispatch(setActiveTab(tab))}
            />
          ))}
        </div>

        {/* Right: Desktop Icons or Mobile Toggle */}
        <div className="flex items-center flex-shrink-0">
          <div className="hidden lg:flex items-center gap-6">
            {components.map((item) => (
              <GenericTooltip
                key={item.tooltip}
                trigger={item.icon}
                content={<span>{item.tooltip}</span>}
                contentClassName="text-xs bg-badges text-foreground"
                side="top"
              />
            ))}
          </div>

          {/* Mobile/Tablet Menu Toggle */}
          <CustomBadge
            className="lg:hidden cursor-pointer bg-background transition-all py-1 h-8"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            icon2={
              isMobileMenuOpen ? (
                <ChevronUp size={15} />
              ) : (
                <Settings size={15} />
              )
            }
            label={isMobileMenuOpen ? "" : "P1"}
          />
        </div>
      </div>

      {/* Mobile/Tablet Dropdown Menu */}
      {isMobileMenuOpen && <MobileDropDown components={components} />}
    </div>
  );
}
