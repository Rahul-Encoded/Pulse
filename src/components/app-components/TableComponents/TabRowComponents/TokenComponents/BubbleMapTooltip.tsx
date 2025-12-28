import React, { useMemo, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { WandSparkles } from "lucide-react";
import BubbleMap from "./BubbleMap";
import { BubbleMapTooltipProps } from "./interface/types";

const BubbleMapTooltip: React.FC<BubbleMapTooltipProps> = ({
  createdAt,
  bubbleMapData,
}) => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeAgo = useMemo(() => {
    const secondsAgo = Math.floor((now - createdAt) / 1000);
    if (secondsAgo < 1) return "just now";
    if (secondsAgo < 60) return `${secondsAgo}s`;
    return `${Math.floor(secondsAgo / 60)}m`;
  }, [now, createdAt]);

  return (
    <div className="p-2 flex flex-col items-center gap-2">
      <div className="flex gap-2 w-full">
        <Button
          variant="outline"
          className="h-7 px-2 bg-badges border-border text-[10px] font-bold flex gap-1 items-center hover:bg-muted"
        >
          <WandSparkles size={12} className="text-foreground" />
          Refresh
        </Button>
        <Button
          variant="outline"
          className="h-7 px-2 bg-badges border-border text-[10px] font-bold hover:bg-muted"
        >
          {timeAgo}
        </Button>
      </div>
      <BubbleMap data={bubbleMapData} width={150} height={150} />
    </div>
  );
};

export default BubbleMapTooltip;
