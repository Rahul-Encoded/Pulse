"use client";

import { useAppSelector } from "@/lib/hooks";
import { selectActiveTab } from "@/lib/features/ui/uiSlice";
import Tab from "./TableComponents/Tab";

const names = ["New Pairs", "Final Stretch", "Migrated"];

export default function TokenTable() {
  const activeTab = useAppSelector(selectActiveTab);

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-[1px] bg-border border border-border rounded-lg overflow-hidden h-[calc(100vh-120px)] md:h-[calc(100vh-80px)]">
      {names.map((name, index) => {
        const isActive = activeTab === name;
        return (
          <div
            key={index}
            className={
              isActive ? "flex-1 min-h-0" : "hidden lg:block flex-1 min-h-0"
            }
          >
            <Tab name={name} />
          </div>
        );
      })}
    </div>
  );
}
