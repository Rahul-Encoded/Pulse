import { Token } from "@/lib/interface/tokens";

export const SentimentBar = ({ token }: { token: Token }) => {
  const buys = token.transactions.buys;
  const sells = token.transactions.sells;
  const total = buys + sells;

  // Calculate percentages, defaulting to 50/50 if no transactions
  const buyPercent = total > 0 ? (buys / total) * 100 : 50;
  const sellPercent = total > 0 ? (sells / total) * 100 : 50;

  return (
    <div className="flex w-8 h-1 rounded-full overflow-hidden bg-background/20 border border-white/5">
      <div
        className="h-full bg-green-500 transition-all duration-500"
        style={{ width: `${buyPercent}%` }}
      />
      <div
        className="h-full bg-red-500 transition-all duration-500"
        style={{ width: `${sellPercent}%` }}
      />
    </div>
  );
};
