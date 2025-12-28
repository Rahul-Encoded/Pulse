import React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface WalletBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon1: React.ReactNode;
  value1?: string | number;
  icon2: React.ReactNode;
  value2?: string | number;
}

const WalletBadge = React.forwardRef<HTMLDivElement, WalletBadgeProps>(
  ({ className, icon1, icon2, value1, value2, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-3 px-3 py-1.5 rounded-full bg-background border border-border transition-all group cursor-pointer",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2">
          {icon1}
          <span className="text-sm font-bold text-foreground leading-tight">
            {value1}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {icon2}
          <span className="text-sm font-bold text-foreground leading-tight">
            {value2}
          </span>
        </div>

        <ChevronDown className="w-3.5 h-3.5 text-foreground/50 transition-colors" />
      </div>
    );
  }
);

WalletBadge.displayName = "WalletBadge";

export default WalletBadge;
