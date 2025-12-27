import { Token } from "@/lib/interface/tokens";
import Image from "next/image";
import { GenericTooltip } from "@/components/app-components/TableComponents/TabRowComponents/Tooltip/GenericTooltip";
import { EyeOff, ChefHat } from "lucide-react";
import ToolTipIcons from "../CommonComponents/ToolTipIcons";

export default function TokenMedia({ token }: { token: Token }) {
  return (
    <div className="relative group w-fit">
      <GenericTooltip
        trigger={
          <div className="relative">
            <ToolTipIcons
              elements={[
                <GenericTooltip
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
            <Image
              src={token.imageUrl}
              alt={token.name}
              width={100}
              height={100}
              className="cursor-pointer rounded-lg border border-border transition-all duration-300 group-hover:border-border"
            />
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
        contentClassName="w-48 h-64 overflow-hidden border border-border shadow-2xl p-1"
        triggerClassName=""
      />
    </div>
  );
}
