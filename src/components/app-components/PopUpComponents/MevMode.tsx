import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { MevModeState } from "@/lib/interface/types";

const mevModes = ["Off", "Reduced", "Secure"];
const mevModeImages = [
  "/shield-slash.svg",
  "/shield.svg",
  "/shield-double.svg",
];
const mevModeImagesSelected = [
  "/shield-slash-blue.svg",
  "/shield-blue.svg",
  "/shield-double-blue.svg",
];

export default function MevMode({
  mevMode,
  setMevMode,
}: {
  mevMode: MevModeState;
  setMevMode: (value: MevModeState) => void;
}) {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex justify-around items-center">
        <span className="pr-2 text-xs">MEV Mode</span>
        <Info className="h-4 w-4 text-muted-foreground" />
      </div>

      <Tabs
        value={mevMode.mevMode}
        onValueChange={(value) => setMevMode({ mevMode: value })}
        className=""
      >
        <TabsList className="w-full bg-background border border-border">
          {mevModes.map((mode, index) => (
            <TabsTrigger
              key={mode}
              value={mode}
              className={cn(
                mevMode.mevMode === mode
                  ? "data-[state=active]:bg-blue-400/20 data-[state=active]:text-blue-400"
                  : "",
                "w-full text-xs"
              )}
            >
              <Image
                src={mevModeImages[index]}
                alt={mode}
                width={12}
                height={12}
                className={cn(
                  "mr-[1px]",
                  mevMode.mevMode === mode ? "hidden" : "block"
                )}
              />
              <Image
                src={mevModeImagesSelected[index]}
                alt={mode}
                width={12}
                height={12}
                className={cn(
                  "mr-[1px]",
                  mevMode.mevMode === mode ? "block" : "hidden"
                )}
              />
              {mode}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
