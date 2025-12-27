import { Token } from "@/lib/interface/tokens";
import { GenericTooltip } from "../Tooltip/GenericTooltip";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CircleAlert, Zap } from "lucide-react";
import { toast } from "sonner";

export default function TokenBadges({ token }: { token: Token }) {
  const mainItems = [
    {
      extra: (
        <Badge variant="outline" className="text-red-400 px-1 rounded-full">
          <Image
            src="/user-star-red.svg"
            alt="Bubble Map"
            width={16}
            height={16}
            className="border-none"
          />
          {token.bubbleMapPercentage}%
        </Badge>
      ),
      tooltip: "Bubble Map",
    },
    {
      extra: (
        <Badge variant="outline" className="text-red-400 px-1 rounded-full">
          <Image
            src="/sniper-red.svg"
            alt="Sniper Holding"
            width={16}
            height={16}
            className="border-none"
          />
          {token.sniperHolding}%
        </Badge>
      ),
      tooltip: "Sniper Holding",
    },
    {
      extra: (
        <Badge variant="outline" className="text-green-400 px-1 rounded-full">
          <Image
            src="/mole-green.svg"
            alt="Insider Holding"
            width={16}
            height={16}
            className="border-none"
          />
          {token.insiderHolding}%
        </Badge>
      ),
      tooltip: "Insider Holding",
    },
    {
      extra: (
        <Badge variant="outline" className="text-green-400 px-1 rounded-full">
          <Image
            src="/cubes-green.svg"
            alt="Bundle Holding"
            width={16}
            height={16}
            className="border-none"
          />
          {token.bundleHolding}%
        </Badge>
      ),
      tooltip: "Bundle Holding",
    },
    {
      extra: token.isPaid ? (
        <Badge variant="outline" className="text-green-400 px-1 rounded-full">
          <Image
            src="/eagle.svg"
            alt="Paid"
            width={16}
            height={16}
            className="border-none"
          />
        </Badge>
      ) : null,
      tooltip: "Paid",
    },
  ];
  return (
    <div className="flex justify-between w-full">
      <div className="flex items-center gap-2">
        {mainItems.map((item) => (
          <GenericTooltip
            key={item.tooltip}
            trigger={item.extra}
            content={<span>{item.tooltip}</span>}
            contentClassName="text-xs bg-badges text-foreground"
            side="top"
          />
        ))}
      </div>
      <div>
        <Button
          variant="outline"
          className="text-xs bg-blue-600 hover:bg-blue-500 text-table hover:text-table rounded-full p-0 h-6 px-1 font-bold"
          onClick={() => {
            toast(
              <div className="flex items-center gap-1">
                <CircleAlert className="fill-red-400 w-4 stroke-table"></CircleAlert>
                Minimum Buy amount is 0.0001 SOL
              </div>
            );
          }}
        >
          <Zap className="fill-table w-4"></Zap>0 SOL
        </Button>
      </div>
    </div>
  );
}
