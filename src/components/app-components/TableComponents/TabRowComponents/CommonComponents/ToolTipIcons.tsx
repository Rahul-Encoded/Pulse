import { cn } from "@/lib/utils";
import { ToolTipIconsProps } from "../interface/types";

export default function ToolTipIcons({
  className,
  elements,
}: ToolTipIconsProps) {
  return (
    <div className="absolute left-0 top-0 flex flex-col gap-1.5 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0">
      {elements &&
        elements.map((element, index) => (
          <div
            key={index}
            className={cn(
              "w-6 h-6 flex items-center justify-center rounded-lg bg-secondary border border-border hover:bg-secondary cursor-pointer transition-all duration-200 shadow-xl",
              className
            )}
          >
            {element}
          </div>
        ))}
    </div>
  );
}
