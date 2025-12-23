import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";
import { cn } from "@/lib/utils";
import TradeParameterInput from "./TradeParameterInput";


export default function PresetPopup() {
    const [buySettings, setBuySettings] = useState<boolean>(true);
    const [sellSettings, setSellSettings] = useState<boolean>(false);

    const handleBuySettings = () => {
        setBuySettings(!buySettings);
        setSellSettings(false);
    }

    const handleSellSettings = () => {
        setSellSettings(!sellSettings);
        setBuySettings(false);
    }

    return (
        <div className="flex flex-col gap-2">

            <Separator></Separator>

            <Tabs defaultValue="account" className="w-[400px] p-4">
                <TabsList className="w-full">
                    <TabsTrigger value="Buy" onClick={handleBuySettings} className={cn(buySettings ? "data-[state=active]:bg-emerald-400/20 data-[state=active]:text-emerald-400" : "", "w-full")}>Buy Settings</TabsTrigger>
                    <TabsTrigger value="Sell" onClick={handleSellSettings} className={cn(sellSettings ? "data-[state=active]:bg-red-400/20 data-[state=active]:text-red-400" : "", "w-full")}>Sell Settings</TabsTrigger>
                </TabsList>

            </Tabs>

            <TradeParameterInput />

        </div>
    );
}