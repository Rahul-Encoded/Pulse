import { TokenStatus3 } from "@/lib/interface/tokens";
import { ShieldCheck, Zap, AlertTriangle, LucideIcon } from "lucide-react";
import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBorderProps } from "./interface/types";

const statusConfig: Record<
  TokenStatus3,
  { color: string; icon: LucideIcon; iconColor: string }
> = {
  Safe: {
    color: "bg-green-500",
    icon: ShieldCheck,
    iconColor: "text-green-500",
  },
  Migrated: {
    color: "bg-yellow-500",
    icon: Zap,
    iconColor: "text-yellow-500",
  },
  Risk: {
    color: "bg-red-500",
    icon: AlertTriangle,
    iconColor: "text-red-500",
  },
};

export default function AnimatedBorder({
  token,
  children,
}: AnimatedBorderProps) {
  const config = useMemo(() => statusConfig[token.status3], [token.status3]);
  const StatusIcon = config.icon;

  return (
    <div className="relative p-[2px]">
      {/* The Image/Content */}
      <div className="relative z-10">{children}</div>

      {/* Bottom Border */}
      <div
        className={cn(
          "absolute bottom-0 right-0 h-[1.5px] w-full animate-border-bottom",
          config.color
        )}
      />

      {/* Left Border */}
      <div
        className={cn(
          "absolute left-0 bottom-0 w-[1.5px] h-full animate-border-left",
          config.color
        )}
      />

      {/* Top Border */}
      <div
        className={cn(
          "absolute top-0 left-0 h-[1.5px] w-full animate-border-top",
          config.color
        )}
      />

      {/* Right Border */}
      <div
        className={cn(
          "absolute right-0 top-0 w-[1.5px] h-full animate-border-right",
          config.color
        )}
      />

      {/* The Icon at the bottom right */}
      <div
        className={cn(
          "absolute -bottom-1 -right-1 z-20 transition-all duration-500 flex items-center justify-center origin-top-right",
          config.iconColor
        )}
      >
        <div className="bg-background rounded-full p-0.5 shadow-sm border border-border/50">
          <StatusIcon size={12} fill="currentColor" />
        </div>
      </div>
    </div>
  );
}
