import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Info } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image";

const mevModes = ["Off", "Reduced", "Secure"];
const mevModeImages = ["/shield-slash.svg", "/shield.svg", "/shield-double.svg"];
const mevModeImagesSelected = ["/shield-slash-blue.svg", "/shield-blue.svg", "/shield-double-blue.svg"];


export default function MevMode() {
    const [mevMode, setMevMode] = useState("Off");
    return (
        <div className="flex justify-between items-center w-full">
            <div className="flex justify-around items-center">
                <span className="pr-2 text-xs">MEV Mode</span>
                <Info className="h-4 w-4 text-muted-foreground" />
            </div>

            <Tabs defaultValue="Off" className="">
                <TabsList className="w-full bg-background border border-border">
                    {mevModes.map((mode, index) => (
                        <TabsTrigger value={mode} onClick={() => setMevMode(mode)} className={cn(mevMode === mode ? "data-[state=active]:bg-blue-400/20 data-[state=active]:text-blue-400" : "", "w-full text-xs")}>
                            <Image src={mevModeImages[index]} alt={mode} width={12} height={12} className={cn("mr-[1px]", mevMode === mode ? "hidden" : "block")} />
                            <Image src={mevModeImagesSelected[index]} alt={mode} width={12} height={12} className={cn("mr-[1px]", mevMode === mode ? "block" : "hidden")} />
                            {mode}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>
        </div>
    )
}