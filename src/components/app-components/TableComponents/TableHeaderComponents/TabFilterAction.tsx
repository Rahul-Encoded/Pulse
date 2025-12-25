import { SlidersHorizontal } from "lucide-react";

export default function TabFilterAction() {
  return (
    <button className="p-2 hover:bg-secondary rounded-md transition-colors">
      <SlidersHorizontal className="h-4 w-4" />
    </button>
  );
}
