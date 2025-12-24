"use client"

import PopUpHeader from "./PopUpHeader";
import Seperator from "../ComonComponents/Seperator";
import PresetPopup from "./PresetPopup";
import { TradingSettingsPopUpProps } from "./interface/types";

export default function TradingSettingsPopUp({ isPopUpOpen, setIsPopUpOpen }: TradingSettingsPopUpProps) {
    if (!isPopUpOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/60 "
                onClick={() => setIsPopUpOpen(false)}
            />

            {/* Modal Content */}
            <div className="relative bg-background border border-border rounded-2xl w-full max-w-[400px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">

                <div className="h-[1px] bg-white/10 w-full" />
                {/* Header */}
                <PopUpHeader setIsPopUpOpen={setIsPopUpOpen} title="Trading Settings" />

                <Seperator></Seperator>

                {/* Body */}
                <div className="p-6">
                    <PresetPopup />
                </div>
            </div>
        </div>
    );
}
