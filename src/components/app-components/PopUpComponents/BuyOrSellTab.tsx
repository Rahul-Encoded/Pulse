import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function BuyOrSellTab() {
    const [buySettings, setBuySettings] = useState(true);
    const [sellSettings, setSellSettings] = useState(false);

    const handleBuySettings = () => {
        setBuySettings(true);
        setSellSettings(false);
    }
    const handleSellSettings = () => {
        setBuySettings(false);
        setSellSettings(true);
    }
    return (
        <Tabs defaultValue="Buy" className="w-full mb-6">
            <TabsList className="w-full">
                <TabsTrigger value="Buy" onClick={handleBuySettings} className={cn(buySettings ? "data-[state=active]:bg-emerald-400/20 data-[state=active]:text-emerald-400" : "", "w-full")}>Buy Settings</TabsTrigger>
                <TabsTrigger value="Sell" onClick={handleSellSettings} className={cn(sellSettings ? "data-[state=active]:bg-red-400/20 data-[state=active]:text-red-400" : "", "w-full")}>Sell Settings</TabsTrigger>
            </TabsList>

        </Tabs>
    )
}