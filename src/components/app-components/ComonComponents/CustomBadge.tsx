import React from "react";
import { cn } from "@/lib/utils";
import { CustomBadgeProps } from "./interface/types";

const CustomBadge = React.forwardRef<HTMLDivElement, CustomBadgeProps>(
  ({ icon1, icon2, className, label, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-2 px-3 py-1.5 rounded-full bg-rowhover border-none transition-all group",
          className
        )}
        {...props}
      >
        {icon1}
        <span className="text-sm font-bold text-foreground leading-tight">
          {label}
        </span>
        {icon2}
      </div>
    );
  }
);

CustomBadge.displayName = "Badge";

export default CustomBadge;
