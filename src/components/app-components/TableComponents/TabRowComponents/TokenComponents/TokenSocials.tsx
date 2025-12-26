import { Token } from "@/lib/interface/tokens";
import { GenericTooltip } from "../Tooltip/GenericTooltip";
import React from "react";
import { SOCIAL_ICONS } from "./constants/socialIcons";
import { SocialIcon } from "./SocialIcon";

export default function TokenSocials({ token }: { token: Token }) {
  return (
    <div className="flex gap-2 ml-2">
      {SOCIAL_ICONS.map(
        ({ key, src, hoverSrc, label, details, link }) =>
          token.socials[key as keyof typeof token.socials] && (
            <GenericTooltip
              key={key}
              trigger={
                <SocialIcon
                  src={src}
                  hoverSrc={hoverSrc}
                  alt={label}
                  link={link}
                />
              }
              content={
                <div className="flex flex-col gap-0.5 text-foreground/80 min-w-[120px]">
                  <span className="text-sm font-semibold whitespace-pre-line">
                    {label}
                  </span>
                  <span className="text-xs text-muted-foreground break-all">
                    {details}
                  </span>
                </div>
              }
              side="top"
            />
          )
      )}
    </div>
  );
}
