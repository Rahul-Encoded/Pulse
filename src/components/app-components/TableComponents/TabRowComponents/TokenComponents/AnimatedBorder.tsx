import { TokenStatus3 } from "@/lib/interface/tokens";
import { ShieldCheck, Zap, AlertTriangle, LucideIcon } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
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
  const [isAnimating, setIsAnimating] = useState(false);
  const config = useMemo(() => statusConfig[token.status3], [token.status3]);
  const StatusIcon = config.icon;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const runCycle = () => {
      setIsAnimating(true);

      // Total animation time for 4 segments (4 x 600ms = 2400ms) + visible time
      timeoutId = setTimeout(() => {
        setIsAnimating(false);

        // Reset and wait for 1-2s before next cycle
        const delay = 1000 + Math.random() * 1000;
        timeoutId = setTimeout(runCycle, delay);
      }, 4000); // 2.4s animation + 1.6s pause with full border
    };

    // Initial start
    timeoutId = setTimeout(runCycle, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="relative p-[2px]">
      {/* The Image/Content */}
      <div className="relative z-10">{children}</div>

      {/* Bottom Border - First (Fills from Right) */}
      <div
        className={cn(
          "absolute bottom-0 right-0 h-[1.5px] transition-all duration-600 ease-in-out origin-right",
          config.color,
          isAnimating ? "w-full opacity-100" : "w-full opacity-40"
        )}
        style={{ transitionDelay: isAnimating ? "0ms" : "1800ms" }}
      />

      {/* Left Border - Second (Fills from Bottom) */}
      <div
        className={cn(
          "absolute left-0 bottom-0 w-[1.5px] transition-all duration-600 ease-in-out origin-bottom",
          config.color,
          isAnimating ? "h-full opacity-100" : "h-full opacity-40"
        )}
        style={{ transitionDelay: isAnimating ? "600ms" : "1200ms" }}
      />

      {/* Top Border - Third (Fills from Left) */}
      <div
        className={cn(
          "absolute top-0 left-0 h-[1.5px] transition-all duration-600 ease-in-out origin-left",
          config.color,
          isAnimating ? "w-full opacity-100" : "w-full opacity-40"
        )}
        style={{ transitionDelay: isAnimating ? "1200ms" : "600ms" }}
      />

      {/* Right Border - Fourth (Fills from Bottom) */}
      <div
        className={cn(
          "absolute right-0 top-0 w-[1.5px] transition-all duration-600 ease-in-out origin-bottom",
          config.color,
          isAnimating ? "h-full opacity-100" : "h-full opacity-40"
        )}
        style={{ transitionDelay: isAnimating ? "1800ms" : "0ms" }}
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
