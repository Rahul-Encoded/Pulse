import {
  BookmarkX,
  BoxIcon,
  ChevronDown,
  CircleQuestionMark,
  Keyboard,
  List,
  Speaker,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import CustomBadge from "./CustomBadge";
import { GenericTooltip } from "../TableComponents/TabRowComponents/Tooltip/GenericTooltip";
import WalletBadge from "./WalletBadge";

export default function Navbar() {
  const components = [
    {
      icon: <CircleQuestionMark size={20} className="text-foreground/60" />,
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
        <BookmarkX size={20} className="cursor-pointer text-foreground/80" />
      ),
      tooltip: "Blacklist dev, handle, keywords",
    },
    {
      icon: (
        <Keyboard size={20} className="cursor-pointer text-foreground/80" />
      ),
      tooltip: "Pulse Hotkeys",
    },
    {
      icon: <Speaker size={20} className="cursor-pointer text-foreground/80" />,
      tooltip: "Alerts",
    },
    {
      icon: (
        <WalletBadge
          icon1={
            <Wallet size={20} className="cursor-pointer text-foreground/80" />
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
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-semibold">Pulse</h2>
        <div className="rounded-full bg-table p-2 w-8 h-8 justify-center">
          <Image
            src="/solanaLogoMark.svg"
            alt="solana"
            width={15}
            height={15}
          />
        </div>
        <BoxIcon size={15} className="text-yellow-400" />
      </div>
      <div className="flex items-center gap-4">
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
    </div>
  );
}
