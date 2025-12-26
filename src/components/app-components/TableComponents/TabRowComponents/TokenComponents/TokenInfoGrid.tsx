"use client";

import { Token } from "@/lib/interface/tokens";
import { useEffect, useState } from "react";
import TokenSocials from "./TokenSocials";

export default function TokenInfoGrid({ token }: { token: Token }) {
  const [elapsedTime, setElapsedTime] = useState("");

  // Update birth time every second
  useEffect(() => {
    const updateTime = () => {
      const seconds = Math.floor((Date.now() - token.createdAt) / 1000);
      setElapsedTime(
        seconds > 60 ? `${Math.floor(seconds / 60)}m` : `${seconds}s`
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [token.createdAt]);

  return (
    <div className="flex flex-row flex-1 gap-1 justify-start items-center overflow-hidden">
      <span className="text-sm text-green-600">{elapsedTime}</span>
      <TokenSocials token={token} />
    </div>
  );
}
