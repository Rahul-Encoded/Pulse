import { SlidersHorizontal, Zap } from "lucide-react";
import Image from "next/image";
import { TabProps } from "./interface/types";

export default function TabHeader({ name, number }: TabProps) {
    return (
        <div className="flex items-center justify-between p-4 bg-background h-12">
            <div className="">
                <h2 className="text-base font-semibold">{name}</h2>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-full py-1 px-2 gap-2 bg-secondary/20">
                    <div className="flex items-center justify-between gap-2 pr-4 border-r border-border">
                        <div className="flex items-center gap-2">
                            <Zap className="h-4 w-4 fill-muted-foreground text-muted-foreground" />
                            <span className="text-sm font-medium">{number || 0}</span>
                        </div>
                        <div className="ml-4">
                            <Image src="/solanaLogoMark.svg" alt="solanaLogo" width={12} height={12} />
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">P1</button>
                        <button className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">P2</button>
                        <button className="text-xs font-medium text-blue-500 hover:text-blue-400 transition-colors">P3</button>
                    </div>
                </div>

                <button className="p-2 hover:bg-secondary rounded-md transition-colors">
                    <SlidersHorizontal className="h-4 w-4" />
                </button>
            </div>
        </div>
    )
}