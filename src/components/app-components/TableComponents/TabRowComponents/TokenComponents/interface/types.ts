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
    React.ImgHTMLAttributes<HTMLImageElement>,
    "width" | "height" | "src" | "alt"
  > {
  src: string;
  hoverSrc: string;
  alt: string;
  link: string;
}
