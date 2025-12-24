import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function AutoFee() {
    return (
        <div className="flex items-center gap-3">
            <Checkbox id="auto-fee"></Checkbox>
            <Label htmlFor="auto-fee" className="text-xs">Auto fee</Label>
        </div>
    )
}