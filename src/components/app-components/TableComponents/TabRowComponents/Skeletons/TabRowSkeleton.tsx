"use client";
import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";
import MediaSkeleton from "./MediaSkeleton";
import NameSkeleton from "./NameSkeleton";
import InfoGridSkeleton from "./InfoGridSkeleton";
import CapsSkeleton from "./CapsSkeleton";
import BadgesSkeleton from "./BadgesSkeleton";

export default function TabRowSkeleton() {
  return (
    <TableRow className="border-b border-border hover:bg-transparent cursor-default">
      <TableCell className="p-0">
        <div className="flex flex-row w-full gap-2 pl-2 pr-2 pt-0 pb-2 items-start">
          {/* TokenMedia Skeleton */}
          <MediaSkeleton />

          <div className="flex flex-col flex-1 gap-2 pt-1">
            <div className="flex flex-row justify-between items-start w-full">
              <div className="flex flex-col gap-2">
                {/* TabRowName Skeleton */}
                <NameSkeleton />
                {/* TokenInfoGrid Skeleton */}
                <InfoGridSkeleton></InfoGridSkeleton>
              </div>

              {/* TokenCaps Skeleton */}
              <CapsSkeleton></CapsSkeleton>
            </div>

            {/* TokenBadges Skeleton */}
            <BadgesSkeleton></BadgesSkeleton>
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
}
