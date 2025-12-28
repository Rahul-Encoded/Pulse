import { Token } from "@/lib/interface/tokens";
import Image from "next/image";
import { GenericTooltip } from "@/components/app-components/TableComponents/TabRowComponents/Tooltip/GenericTooltip";
import { EyeOff, ChefHat, Clipboard } from "lucide-react";
import ToolTipIcons from "../CommonComponents/ToolTipIcons";
import truncateAddress from "./utils/truncateAddress";
import { toast } from "sonner";
import Toaster from "@/components/app-components/ComonComponents/Toaster";
import AnimatedBorder from "./AnimatedBorder";

export default function TokenMedia({
  token,
  index,
}: {
  token: Token;
  index?: number;
}) {
  const isPriority = index !== undefined && index < 6;
  return (
    <div className="relative group w-fit">
      <GenericTooltip
        trigger={
          <div className="relative">
            <ToolTipIcons
              elements={[
                <GenericTooltip
                  key="hide-token"
                  side="left"
                  trigger={
                    <EyeOff
                      size={12}
                      className="text-foreground/60 hover:text-blue-600"
                    />
                  }
                  content={
                    <span className="text-xs text-foreground/80">
                      Hide Token
                    </span>
                  }
                />,
                <GenericTooltip
                  key="blacklist-dev"
                  side="left"
                  trigger={
                    <ChefHat
                      size={12}
                      className="text-foreground/60 hover:text-blue-600"
                    />
                  }
                  content={
                    <span className="text-xs text-foreground/80">
                      Blacklist Dev
                    </span>
                  }
                />,
              ]}
            />
            <div className="flex flex-col items-center">
              <AnimatedBorder token={token}>
                <Image
                  src={token.imageUrl}
                  alt={token.name}
                  width={80}
                  height={80}
                  priority={isPriority}
                  className="cursor-pointer rounded-lg border border-border transition-all duration-300 group-hover:border-border"
                />
              </AnimatedBorder>
              <span
                className="text-xs text-foreground/80 hover:text-foreground cursor-pointer transition-colors"
                onClick={() => {
                  navigator.clipboard.writeText(token.address);
                  toast(
                    <Toaster
                      icon={<Clipboard size={16} />}
                      className="text-blue-600"
                      message="Address copied to clipboard"
                    />
                  );
                }}
              >
                {truncateAddress(token.address, 6, 4)}
              </span>
            </div>
          </div>
        }
        content={
          <Image
            src={token.imageUrl}
            alt={token.name}
            className="w-full h-full object-fill m-0"
            width={192}
            height={256}
          />
        }
        contentClassName="w-56 h-64 overflow-hidden border border-border shadow-2xl p-1"
        triggerClassName=""
      />
    </div>
  );
}
