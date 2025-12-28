import React, { useMemo } from "react";
import { Token } from "@/lib/interface/tokens";
import { GenericTooltip } from "../Tooltip/GenericTooltip";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Boxes,
  CircleAlert,
  Crosshair,
  Ghost,
  UserStar,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import Toaster from "@/components/app-components/ComonComponents/Toaster";

export default function TokenBadges({ token }: { token: Token }) {
  const colors = ["text-red-400", "text-green-400"];
  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  const mainItems = useMemo(
    () => [
      {
        extra: (
          <Badge
            variant="outline"
            className={`${getRandomColor()} px-1 rounded-full`}
          >
            <UserStar size={16} />
            {token.bubbleMapPercentage}%
          </Badge>
        ),
        tooltip: "Bubble Map",
      },
      {
        extra: (
          <Badge
            variant="outline"
            className={`${getRandomColor()} px-1 rounded-full`}
          >
            <Crosshair size={16} />
            {token.sniperHolding}%
          </Badge>
        ),
        tooltip: "Sniper Holding",
      },
      {
        extra: (
          <Badge
            variant="outline"
            className={`${getRandomColor()} px-1 rounded-full`}
          >
            <Ghost size={16} />
            {token.insiderHolding}%
          </Badge>
        ),
        tooltip: "Insider Holding",
      },
      {
        extra: (
          <Badge
            variant="outline"
            className={`${getRandomColor()} px-1 rounded-full`}
          >
            <Boxes size={16} />
            {token.bundleHolding}%
          </Badge>
        ),
        tooltip: "Bundle Holding",
      },
      {
        extra: token.isPaid ? (
          <Badge
            variant="outline"
            className={`${getRandomColor()} px-1 rounded-full`}
          >
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
    ],
    [token]
  );
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
              <Toaster
                icon={
                  <CircleAlert className="fill-red-400 w-4 stroke-table"></CircleAlert>
                }
                className="text-red-400"
                message="Minimum Buy amount is 0.0001 SOL"
              />
            );
          }}
        >
          <Zap className="fill-table w-4"></Zap>0 SOL
        </Button>
      </div>
    </div>
  );
}
