import { SlidersHorizontal } from "lucide-react";
import { GenericTooltip } from "../TabRowComponents/Tooltip/GenericTooltip";

export default function TabFilterAction() {
  return (
    <GenericTooltip
      trigger={
        <div className="p-2 hover:bg-secondary rounded-md transition-colors cursor-pointer">
          <SlidersHorizontal className="h-4 w-4" />
        </div>
      }
      content={<span className="text-xs text-foreground">Filters</span>}
      side="top"
    />
  );
}
