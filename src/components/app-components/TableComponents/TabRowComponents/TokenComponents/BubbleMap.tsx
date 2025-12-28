import React, { useRef, useEffect } from "react";
import { BubblePoint } from "@/lib/interface/tokens";

interface BubbleMapProps {
  data: BubblePoint[];
  width?: number;
  height?: number;
}

const BubbleMap: React.FC<BubbleMapProps> = ({
  data,
  width = 200,
  height = 200,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    console.log("dataBaby", data);

    // Draw bubbles
    data.forEach((point) => {
      const x = (point.x / 100) * width;
      const y = (point.y / 100) * height;
      const r = (point.r / 100) * Math.min(width, height) * 2;

      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = point.color;
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.stroke();
    });
  }, [data, width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="rounded-md bg-black/20"
    />
  );
};

export default BubbleMap;
