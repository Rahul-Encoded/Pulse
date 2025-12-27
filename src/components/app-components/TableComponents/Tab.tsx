"use client";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TabHeader from "./TableHeaderComponents/TabHeader";
import TabRow from "./TabRowComponents/TabRow";
import { TabProps } from "./interface/types";
import { useAppSelector } from "@/lib/hooks";
import { selectAllTokens } from "@/lib/features/tokens/tokensSlice";
import { useMemo } from "react";
import { GenericTooltip } from "./TabRowComponents/Tooltip/GenericTooltip";

export default function Tab({ name, number }: TabProps) {
  const allTokens = useAppSelector(selectAllTokens);

  const filteredTokens = useMemo(() => {
    return allTokens.filter((token) => token.status1 === name);
  }, [allTokens, name]);

  return (
    <div className="bg-table h-full flex flex-col min-h-0">
      <div className="flex-shrink-0">
        <TabHeader name={name} number={number} />
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto scrollbar-custom">
        <Table>
          <TableBody>
            {filteredTokens.map((token) => {
              const color = Math.random() > 0.5 ? "red" : "green";
              return (
                <GenericTooltip
                  key={token.address}
                  trigger={<TabRow token={token} />}
                  content={
                    token.status3 === "Migrated" ? (
                      <span
                        className={`text-xs text-foreground/80 text-${color}-400`}
                      >
                        Migrated
                      </span>
                    ) : (
                      <span
                        className={`text-xs text-foreground/80 text-${color}-400`}
                      >
                        Bonding Value: {token.bondingValue.toFixed(2)}%
                      </span>
                    )
                  }
                  side="top"
                />
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
