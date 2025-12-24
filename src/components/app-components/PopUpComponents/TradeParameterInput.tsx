import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const parameters = ["SLIPPAGE", "PRIORITY", "BRIBE"]
const imageUrl = ["/man.svg", "/gas.svg", "/coin.svg"]

export default function TradeParameterInput() {
    return (
        <div className="flex gap-2">
            {parameters.map((parameter, index) => (
                <div
                    key={parameter}
                    className="flex flex-col border border-border/50 rounded-md overflow-hidden w-full"
                >
                    <div className="relative flex items-center justify-center h-8 bg-foreground/10">
                        <Input
                            type="number"
                            defaultValue={parameter === "SLIPPAGE" ? "20" : parameter === "PRIORITY" ? "0.001" : "0.01"}
                            className="bg-transparent border-none text-center text-lg font-medium focus-visible:ring-0 p-0 h-auto w-full caret-primary shadow-none selection:bg-primary/20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        {parameter === "SLIPPAGE" && (
                            <span className="absolute right-3 text-muted-foreground/60 text-base">%</span>
                        )}
                    </div>
                    <Separator className="bg-border/30" />
                    <div className="flex items-center justify-center h-8 bg-background gap-2">
                        <Image src={imageUrl[index]} alt="solanaLogo" width={12} height={12} />
                        <p className="text-xs font-medium text-muted-foreground/80 tracking-widest">{parameter}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}   