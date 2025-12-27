"use client";

import { Button } from "@/components/ui/button";
import { Token } from "@/lib/interface/tokens";
import { Copy, Clipboard } from "lucide-react";
import { toast } from "sonner";
import { GenericTooltip } from "../Tooltip/GenericTooltip";
import Toaster from "@/components/app-components/ComonComponents/Toaster";

export default function TabRowName({ token }: { token: Token }) {
  return (
    <div className="flex items-center gap-2">
      <h2 className="text-base font-medium">{token.name}</h2>
      <GenericTooltip
        trigger={
          <Button
            className="p-0 bg-transparent hover:bg-transparent border-none flex items-center gap-1.5 group transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigator.clipboard.writeText(token.address);
              toast(
                <Toaster
                  icon={<Clipboard className="text-blue-600" size={16} />}
                  className="text-blue-600"
                  message="Address copied to clipboard"
                />
              );
            }}
          >
            <h2 className="text-base font-medium text-foreground/60 group-hover:text-blue-600 transition-colors">
              {token.symbol}
            </h2>

            <Copy
              size={16}
              className="text-foreground/60 group-hover:text-blue-600 transition-colors"
            />
          </Button>
        }
        content={
          <span className="text-xs text-foreground/80">{token.symbol}</span>
        }
        side="top"
      ></GenericTooltip>
    </div>
  );
}
