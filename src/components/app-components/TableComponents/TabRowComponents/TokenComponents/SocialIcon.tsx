import React, { forwardRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SocialIconProps } from "./interface/types";

export const SocialIcon = forwardRef<HTMLDivElement, SocialIconProps>(
  ({ src, hoverSrc, alt, link, className, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          "relative w-4 h-4 cursor-pointer group transition-all duration-200",
          className
        )}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          window.open(link, "_blank");
          props.onClick?.(e);
        }}
      >
        {/* Base Icon */}
        <Image
          src={src}
          alt={alt}
          width={16}
          height={16}
          className="absolute inset-0 transition-opacity duration-200 group-hover:opacity-0"
        />
        {/* Hover Icon (Blue) */}
        <Image
          src={hoverSrc}
          alt={`${alt} hover`}
          width={16}
          height={16}
          className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        />
      </div>
    );
  }
);

SocialIcon.displayName = "SocialIcon";
