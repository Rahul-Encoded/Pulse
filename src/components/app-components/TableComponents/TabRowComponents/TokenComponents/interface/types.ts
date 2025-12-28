import { BubblePoint, Token } from "@/lib/interface/tokens";

export interface TokenCapItemProps {
  label?: string;
  value?: string | number;
  icon?: React.ReactNode;
  extra?: React.ReactNode;
  tooltip: React.ReactNode;
  className?: string;
}

export interface SocialIconProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "width" | "height" | "src" | "alt"
  > {
  src: string;
  hoverSrc: string;
  alt: string;
  link: string;
}

export interface AnimatedBorderProps {
  token: Token;
  children: React.ReactNode;
}

export interface BubbleMapTooltipProps {
  createdAt: number;
  bubbleMapData: BubblePoint[];
}
