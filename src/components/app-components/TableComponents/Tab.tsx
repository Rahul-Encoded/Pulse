"use client";
import { Table, TableBody } from "@/components/ui/table";
import TabHeader from "./TableHeaderComponents/TabHeader";
import TabRow from "./TabRowComponents/TabRow";
import TabRowSkeleton from "./TabRowComponents/Skeletons/TabRowSkeleton";
import { TabProps } from "./interface/types";
import { useAppSelector } from "@/lib/hooks";
import { selectAllTokens } from "@/lib/features/tokens/tokensSlice";
import { useMemo, useState, useEffect } from "react";
import { GenericTooltip } from "./TabRowComponents/Tooltip/GenericTooltip";

export default function Tab({ name, number }: TabProps) {
  const allTokens = useAppSelector(selectAllTokens);

  const filteredTokens = useMemo(() => {
    return allTokens.filter((token) => token.status1 === name);
  }, [allTokens, name]);

  const [shuffledTokens, setShuffledTokens] = useState(filteredTokens);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading (reduced for better UX)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Sync layout with store updates
  useEffect(() => {
    setShuffledTokens(filteredTokens);
  }, [filteredTokens]);

  // Periodic randomization
  useEffect(() => {
    const interval = setInterval(() => {
      setShuffledTokens((prev) => {
        const arr = [...prev];
        // Fisher-Yates shuffle
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
      });
    }, 6000 + Math.random() * 2000); // Random interval between 6-8 seconds for variety

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-table h-full flex flex-col min-h-0">
      <div className="flex-shrink-0 hidden lg:block">
        <TabHeader name={name} number={number} />
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto scrollbar-custom">
        <Table>
          <TableBody>
            {isLoading
              ? Array.from({ length: 10 }).map((_, i) => (
                  <TabRowSkeleton key={i} />
                ))
              : shuffledTokens.map((token, index) => {
                  const color = Math.random() > 0.5 ? "red" : "green";
                  return (
                    <GenericTooltip
                      key={token.address}
                      trigger={<TabRow token={token} index={index} />}
                      content={
                        token.status2 === "Migrating" ? (
                          <span
                            className={`text-xs text-foreground/80 text-${color}-400`}
                          >
                            Migrating
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
