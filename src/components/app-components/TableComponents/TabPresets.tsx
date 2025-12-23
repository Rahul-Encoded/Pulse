"use client"

import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import TabPresetsContent from "./TabPresetsContent";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function TabPresets() {
    const [openMenu, setOpenMenu] = useState<string | undefined>(undefined);
    const [selectedPreset, setSelectedPreset] = useState<string | undefined>(undefined);

    const presets = [
        { id: "P1", label: "P1", color: "text-muted-foreground" },
        { id: "P2", label: "P2", color: "text-muted-foreground" },
        { id: "P3", label: "P3", color: "text-muted-foreground" },
    ];

    const handleClick = (id: string) => {
        console.log(`Clicked ${id}`);
        // Add custom logic here
        setSelectedPreset(id);
    };

    return (
        <Menubar
            value={openMenu}
            onValueChange={setOpenMenu}
            className="border-none bg-transparent shadow-none h-auto p-0 space-x-0 gap-0"
        >
            {presets.map((preset) => {
                const isSelected = selectedPreset === preset.id;
                const activeColor = isSelected ? "text-blue-500" : "text-muted-foreground";

                return (
                    <MenubarMenu key={preset.id} value={preset.id}>
                        <MenubarTrigger
                            onClick={(e) => {
                                e.preventDefault();
                                handleClick(preset.id);
                            }}
                            onMouseEnter={() => setOpenMenu(preset.id)}
                            className={cn(
                                "p-1 bg-transparent hover:bg-transparent focus:bg-transparent",
                                "text-xs font-medium transition-colors cursor-pointer outline-none",
                                activeColor,
                                `hover:${activeColor} focus:${activeColor} data-[state=open]:${activeColor}`
                            )}
                        >
                            {preset.label}
                        </MenubarTrigger>
                        <div onMouseLeave={() => setOpenMenu(undefined)}>
                            <TabPresetsContent />
                        </div>
                    </MenubarMenu>
                );
            })}
        </Menubar>
    );
}
