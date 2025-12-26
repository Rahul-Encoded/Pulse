"use client";

import * as React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { GenericTooltipProps } from "../interface/types";

export function GenericTooltip({
  trigger,
  content,
  triggerClassName,
  contentClassName,
  side = "bottom",
  align = "center",
}: GenericTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild className={cn(triggerClassName)}>
          {trigger}
        </TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          className={cn("bg-badges", contentClassName)}
        >
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
