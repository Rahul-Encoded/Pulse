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

export default function Tab({ name, number }: TabProps) {
  const allTokens = useAppSelector(selectAllTokens);

  const filteredTokens = useMemo(() => {
    return allTokens.filter((token) => token.status1 === name);
  }, [allTokens, name]);

  return (
    <div className="bg-table">
      <TabHeader name={name} number={number} />
      <Table className="">
        <TableBody>
          {filteredTokens.map((token) => (
            <TabRow key={token.address} token={token} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
