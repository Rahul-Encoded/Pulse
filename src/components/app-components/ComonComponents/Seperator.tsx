import { cn } from "@/lib/utils";

export default function Seperator({ className }: { className?: string }) {
    return (
        <div className={cn("h-[1px] bg-white/10 w-full", className)} />
    )
}   