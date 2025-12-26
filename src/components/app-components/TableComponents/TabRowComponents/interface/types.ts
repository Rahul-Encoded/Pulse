export interface GenericTooltipProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  triggerClassName?: string;
  contentClassName?: string;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  delayDuration?: number;
}

export interface ToolTipIconsProps {
  className?: string;
  elements?: React.ReactNode[];
  toolTipContent?: React.ReactNode;
}
