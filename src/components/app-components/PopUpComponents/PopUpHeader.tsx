import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { PopUpHeaderProps } from "./interface/types"


export default function PopUpHeader({ setIsPopUpOpen, title }: PopUpHeaderProps) {
    return (
        <div className="flex items-center justify-between px-6 py-2">
            <h2 className="text-sm font-semibold text-foreground">{title}</h2>
            <Button
                onClick={() => setIsPopUpOpen(false)}
                variant={"ghost"}
                size={"icon"}
                className="hover:bg-foreground/5 p-0 text-foreground/60 hover:text-primary"
            >
                <X className="h-2 w-2" />
            </Button>
        </div>
    )
}