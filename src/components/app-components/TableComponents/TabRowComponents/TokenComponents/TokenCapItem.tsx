import React from "react";
import { TokenCapItemProps } from "./interface/types";
import { GenericTooltip } from "../Tooltip/GenericTooltip";
import { cn } from "@/lib/utils";

export default function TokenCapItem({
  label,
  value,
  icon,
  extra,
  tooltip,
  className,
}: TokenCapItemProps) {
  return (
    <GenericTooltip
      trigger={
        <div className="flex items-center gap-1 justify-end cursor-pointer group">
          <span className="text-xs text-foreground/60">{label}</span>
          {icon}
          <span
            className={cn("text-base transition-all duration-300", className)}
          >
            {value}
          </span>
          {extra}
        </div>
      }
      content={<span>{tooltip}</span>}
      contentClassName="text-xs bg-badges text-foreground"
      side="top"
    ></GenericTooltip>
  );
}
