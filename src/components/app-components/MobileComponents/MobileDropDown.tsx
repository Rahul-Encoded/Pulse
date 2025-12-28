import { Wallet } from "lucide-react";
import { NavTypeComponent } from "../ComonComponents/interface/types";
import WalletBadge from "../ComonComponents/WalletBadge";
import { GenericTooltip } from "../TableComponents/TabRowComponents/Tooltip/GenericTooltip";
import Image from "next/image";
import TabStats from "../TableComponents/TableHeaderComponents/TabStats";
import TabPresets from "../TableComponents/TableHeaderComponents/TabPresets";

export default function MobileDropDown({
  components,
}: {
  components: NavTypeComponent[];
}) {
  return (
    <div className="lg:hidden flex flex-col gap-4 bg-background p-4 rounded-lg border border-border mt-2 animate-in slide-in-from-top-2 duration-200">
      <div className="flex items-center gap-1 w-full px-2 justify-between">
        {components.slice(0, -1).map((item) => (
          <GenericTooltip
            key={item.tooltip}
            trigger={item.icon}
            content={<span>{item.tooltip}</span>}
            contentClassName="text-xs bg-badges text-foreground"
            side="top"
          />
        ))}
      </div>
      <div className="flex items-center gap-1 w-full">
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
        <div className="flex items-center border border-border rounded-full w-full py-0 px-2 gap-2 bg-background">
          <div className="w-2/3">
            <TabStats number={0} />
          </div>
          <div className="w-1/3 justify-items-end">
            <TabPresets />
          </div>
        </div>
      </div>
    </div>
  );
}
