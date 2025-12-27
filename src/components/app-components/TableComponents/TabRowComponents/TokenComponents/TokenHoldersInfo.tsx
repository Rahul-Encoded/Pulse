import { Token } from "@/lib/interface/tokens";
import Image from "next/image";
import TokenCapItem from "./TokenCapItem";

export default function TokenHoldersInfo({ token }: { token: Token }) {
  const mainItems = [
    {
      value: `${token.holdersCount}`,
      icon: <Image src="/users.svg" alt="Holders" width={16} height={16} />,
      tooltip: "Holders",
    },
    {
      value: `${token.proTradersCount}`,
      icon: (
        <Image src="/candle.svg" alt="Pro Traders" width={16} height={16} />
      ),
      tooltip: "Pro Traders",
    },
    {
      value: `${token.kolsCount}`,
      icon: <Image src="/cup.svg" alt="KOLs" width={16} height={16} />,
      tooltip: "KOLs",
    },
    {
      value: `${token.devMigrationsCount}`,
      icon: (
        <Image
          src="/crown.svg"
          alt="Dev Migrations/Created"
          width={16}
          height={16}
        />
      ),
      tooltip: "Dev Migrations/Created",
    },
  ];

  return (
    <div className="flex items-center gap-2">
      {mainItems.map((item) => (
        <TokenCapItem key={item.tooltip} {...item} className="text-xs" />
      ))}
    </div>
  );
}
