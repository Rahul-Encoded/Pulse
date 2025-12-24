import { Input } from "@/components/ui/input";

export default function MaxFee() {
    return (
        <div className="relative flex items-center justify-center h-8 bg-background">
            <span className="absolute left-3 text-muted-foreground/60 text-sm pr-4">MAX FEE</span>
            <Input type="number" defaultValue={"0.1"} className="rounded-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center">
            </Input>
        </div>
    )
}