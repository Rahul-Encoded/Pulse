import { Token } from "@/lib/interface/tokens";
import { SentimentBar } from "./SentimentBar";
import Image from "next/image";
import TokenCapItem from "./TokenCapItem";

export default function TokenCaps({ token }: { token: Token }) {
  const mainItems = [
    {
      label: "MC",
      value: `$${(token.marketCap / 1000).toFixed(2)}K`,
      tooltip: "Market Value",
      className: `text-${token.mcColor}`,
    },
    {
      label: "V",
      value: `$${(token.volume / 1000).toFixed(0)}K`,
      tooltip: "Volume",
    },
  ];

  const secondaryItems = [
    {
      label: "F",
      icon: (
        <Image src="/solanaLogoMark.svg" alt="solana" width={10} height={10} />
      ),
      value: token.globalFees,
      tooltip: "Fees",
    },
    {
      label: "TX",
      value: token.transactions.buys + token.transactions.sells,
      extra: <SentimentBar token={token} />,
      tooltip: "Transactions",
    },
  ];

  return (
    <div className="flex flex-col gap-0 justify-end">
      {mainItems.map((item) => (
        <TokenCapItem key={item.label} {...item} />
      ))}
      <div className="flex items-center gap-4">
        {secondaryItems.map((item) => (
          <TokenCapItem key={item.label} {...item} className="text-xs" />
        ))}
      </div>
    </div>
  );
}
