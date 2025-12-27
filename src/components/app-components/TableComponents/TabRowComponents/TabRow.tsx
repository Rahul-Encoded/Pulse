"use client";
import { TableCell, TableRow } from "@/components/ui/table";
import { Token } from "@/lib/interface/tokens";
import React, { memo, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import TokenMedia from "./TokenComponents/TokenMedia";
import TabRowName from "./TokenComponents/TabRowName";
import TokenCaps from "./TokenComponents/TokenCaps";
import TokenInfoGrid from "./TokenComponents/TokenInfoGrid";
import TokenBadges from "./TokenComponents/TokenBadges";

interface TabRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  token: Token;
}

const TabRow = memo(
  React.forwardRef<HTMLTableRowElement, TabRowProps>(
    ({ token, className, ...props }, ref) => {
      return (
        <TableRow
          ref={ref}
          className={cn(
            "border-b border-border hover:bg-rowhover cursor-pointer transition-colors",
            className
          )}
          {...props}
        >
          <TableCell className="p-0">
            <div className="flex flex-row w-full gap-2 pl-2 pr-2 pt-0 pb-2 items-start">
              <TokenMedia token={token} />

              <div className="flex flex-col flex-1 gap-1">
                <div className="flex flex-row justify-between items-start w-full">
                  <div className="flex flex-col gap-0">
                    <TabRowName token={token} />
                    <TokenInfoGrid token={token} />
                  </div>
                  <TokenCaps token={token} />
                </div>
                <TokenBadges token={token} />
              </div>
            </div>
          </TableCell>
        </TableRow>
      );
    }
  )
);

TabRow.displayName = "TabRow";
export default TabRow;
