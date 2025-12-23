import { Zap } from "lucide-react";
import Image from "next/image";
import { TabProps } from "./interface/types";

export default function TabStats({ number }: Pick<TabProps, "number">) {
    return (
        <div className="flex items-center justify-between gap-2 pr-4 border-r border-border">
            <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 fill-muted-foreground text-muted-foreground" />
                <span className="text-sm font-medium">{number || 0}</span>
            </div>
            <div className="ml-4">
                <Image src="/solanaLogoMark.svg" alt="solanaLogo" width={12} height={12} />
            </div>
        </div>
    );
}
