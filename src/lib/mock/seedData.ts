import {
  Token,
  TokenStatus1,
  TokenStatus2,
  TokenStatus3,
  ImageBorderColor,
} from "../interface/tokens";

const REAL_TOKENS = [
  {
    name: "Dipshield",
    symbol: "DIPSHIELD",
    address: "JAwMgP9m3Z7SEwoeVFGDh2Q54AMiDi116Bj1LY9xpump",
    mc: 28000,
  },
  {
    name: "Blue Whale",
    symbol: "BlueWhale",
    address: "HC78DbEf5MLZnmH42T5ttCMyWJWdimqaAC8eyt9pump",
    mc: 45000,
  },
  {
    name: "SHITBALL",
    symbol: "SHITBALL",
    address: "FBAFYy6X1oSMsJwnVZvq7PymsefqjQYf41viSLN2pump",
    mc: 8000,
  },
  {
    name: "NewYearsPepe",
    symbol: "NYP",
    address: "8aBBoQ7baRKFVFEcni3j3iK9DtffjawtXiYcWN1Bpump",
    mc: 12000,
  },
  {
    name: "testtoken",
    symbol: "test",
    address: "DTZKmhYUBU3fcixtRavw6HW8sGhGC7GotcxwYgmmpump",
    mc: 5000,
  },
  {
    name: "chroma.",
    symbol: "chroma.",
    address: "D3dhRmus3QzvbVAZo2zHhxu2SmZBjEWr6binyuuepump",
    mc: 19000,
  },
  {
    name: "Community mascot",
    symbol: "BOXIE",
    address: "FBaDgQfxyK6YsukFVKLvALG3VhEuDFvY1jF5gw4opump",
    mc: 32000,
  },
  {
    name: "Sol2Base",
    symbol: "Sol2Base",
    address: "AjfUzKXGgibuz62CCrNDaPacvhJM9jYqZXh66kk9pump",
    mc: 25000,
  },
  {
    name: "X Wrapped",
    symbol: "XWRAPPED",
    address: "AXKvLksrEmX1yvuBw2bWi46k2FpBNtUUE2eZzWWmpump",
    mc: 156000,
  },
  {
    name: "Millie Mog",
    symbol: "MM",
    address: "EJST2oyFVwmkAnuMhrwqwfJG3mYanXtwz1Pggd4bpump",
    mc: 89000,
  },
  {
    name: "HumanPad",
    symbol: "HUMANPAD",
    address: "GRE7825W47BFMbgdcToX1x6Fi6L5gsFdgKdzcVipHhaM",
    mc: 42000,
  },
  {
    name: "Mini Momo",
    symbol: "BMOMO",
    address: "CBUazjdNmorUzEZf34jSsVKde9kWUUyemQ5T74T8pump",
    mc: 67000,
  },
  {
    name: "XmasMemeTree",
    symbol: "MEMETREE",
    address: "QojLmSbsjhSQJrjo3PWDQSjyHFGeUyxoC54Nf1ppump",
    mc: 124000,
  },
  {
    name: "Inanimate Alice",
    symbol: "Alice",
    address: "9DtERsV2qZoovVLAA4MJWWZjMPec45rwjxREX1NKpump",
    mc: 95000,
  },
  {
    name: "HODLPOT",
    symbol: "HODLPOT",
    address: "j9MRPxEPtKBQm95ochWRthybV6e68aNuuCXJaRPpump",
    mc: 112000,
  },
  {
    name: "kaomoji",
    symbol: "kaomoji",
    address: "EkzZhiTazjD7XXCMwv7caj56QfBZ8esD48LCoJRfpump",
    mc: 78000,
  },
  {
    name: "TortaRidingPig",
    symbol: "TRP",
    address: "FjtRoDrjaagfx2129eGP9HAWdBqTLvPXiJz9g4Adpump",
    mc: 34000,
  },
  {
    name: "EFN Coin",
    symbol: "EFN",
    address: "B3x1hGNyQzKEEXCXPofZQpzoaey8F6kyvcun8j56pump",
    mc: 21000,
  },
  {
    name: "Cognitive Labs",
    symbol: "COGNITIVE",
    address: "ANHUmTQM4RQVKryLBWrr3htmACXJprRNKtuo6Gcopump",
    mc: 156000,
  },
  {
    name: "Amina Darkskin",
    symbol: "Amina",
    address: "39j1Vyf3tpe9dgwfUWYcw8q5WDC95rDwJUHJGzq9pump",
    mc: 88000,
  },
  {
    name: "EMOTIONLESS",
    symbol: "EMOTIONLESS",
    address: "6fs3y6BK4j5krrPwAFWcGi1Tugrs9qUuoSanis3hpump",
    mc: 92000,
  },
  {
    name: "SOTER v2",
    symbol: "SOTERv2",
    address: "USp9dJsww4WD6whKDvF2nLCfVMUKHR82P7Ki2Lvpump",
    mc: 45000,
  },
  {
    name: "Abandoned Icons",
    symbol: "ICONS",
    address: "9YWV1naJexVUjn8gdKu7Z6QTpofUKtowq4nUM2b1pump",
    mc: 63000,
  },
  {
    name: "Pump Degen v2",
    symbol: "PUMPING(v2)",
    address: "6ZuPwGz4z83AfPSdrBenk76MLowCnFQ4gP2GrRQKKrV2",
    mc: 77000,
  },
  {
    name: "SOLVENT",
    symbol: "SOLV",
    address: "AugDieMN1NVu8o4qXHQH8kw9U3C8h9PDKx4ZrjCApump",
    mc: 54000,
  },
  {
    name: "The Onboarding",
    symbol: "ONBOARD",
    address: "GRTVyKbsFKP8wn26QLyH9KaPcukMntiUUXkefTYbpump",
    mc: 110000,
  },
  {
    name: "Level Up",
    symbol: "JinWoo",
    address: "DqaX1Ue18QKwGo7SUUAmTiC58mzJinHhwGRWMcRkpump",
    mc: 125000,
  },
  {
    name: "pumpv3",
    symbol: "pv3",
    address: "HuqaR6kKAJ6eBE9DeMABNkTS1bgHSXsjzpVkEn2Spump",
    mc: 82000,
  },
  {
    name: "Used words",
    symbol: "WORDS",
    address: "6xiXFxTWQrPWaoE6ndg1ttJevkKiJvuNBXK6Gks2pump",
    mc: 125000,
  },
  {
    name: "Shamu",
    symbol: "Shamu",
    address: "Exs6uQK83tbWNp6TgbLSd4PeTjMBVPAGkZxc5BKipump",
    mc: 54000,
  },
  {
    name: "A Plastic Pen",
    symbol: "APP",
    address: "DZCi1sbCY89ydixXhvBFjLHz9KVVR58QgMtxRSbgpump",
    mc: 88000,
  },
  {
    name: "the devil of pumpfun",
    symbol: "PONR",
    address: "Dc6PivWqerNfVdu8v2KZfjPpxKZiKtDBH898fkb9pump",
    mc: 92000,
  },
  {
    name: "Black/white",
    symbol: "BlackWhite",
    address: "4fXZW4Cy8F1z6QCUrzmuEtvpskKGhSWpK6rBH5ZMpump",
    mc: 156000,
  },
];

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateSeedTokens(): Token[] {
  const now = Date.now();
  const realTokensLength = REAL_TOKENS.length;
  console.log(realTokensLength);

  return REAL_TOKENS.map((base, index) => {
    // Distribute tokens across the 3 categories
    let status1: TokenStatus1 = "New Pairs";
    if (index > realTokensLength / 3) status1 = "Final Stretch";
    if (index > (2 * realTokensLength) / 3) status1 = "Migrated";

    const status2: TokenStatus2 =
      status1 === "Final Stretch" && Math.random() > 0.5 ? "Migrating" : "Idle";
    const status3: TokenStatus3 =
      status1 === "Migrated"
        ? Math.random() > 0.5
          ? "Safe"
          : "Migrated"
        : "Risk";

    const borderColor: ImageBorderColor =
      status1 === "Migrated" ? "yellow" : Math.random() > 0.7 ? "red" : "green";

    const colors: string[] = ["red-600", "blue-400", "green-600", "blue-600"];

    const mcColor: string = colors[Math.floor(Math.random() * colors.length)];

    const ppPool = [
      "/pp1.png",
      "/pp2.png",
      "/pp3.png",
      "/pp4.png",
      "/pp5.png",
      "/pp6.png",
      "/pp7.png",
      "/pp8.png",
      "/pp9.png",
      "/pp10.png",
    ];
    const imageUrl = ppPool[index % ppPool.length];

    return {
      id: base.address,
      status1,
      status2,
      status3,
      imageUrl,
      imageBorderColor: borderColor,
      name: base.name,
      symbol: base.symbol,
      address: base.address,

      bondingValue: getRandomInt(20, 95),
      marketCap: base.mc + getRandomInt(-500, 2000),
      mcColor,
      volume: getRandomInt(1000, 50000),
      transactions: {
        buys: getRandomInt(10, 100),
        sells: getRandomInt(5, 80),
      },
      globalFees: parseFloat((Math.random() * 0.5).toFixed(3)),

      holdersCount: getRandomInt(50, 500),
      proTradersCount: getRandomInt(1, 20),
      kolsCount: getRandomInt(0, 5),
      devMigrationsCount: getRandomInt(0, 150),

      bundleHolding: getRandomInt(0, 20),
      insiderHolding: getRandomInt(0, 15),
      sniperHolding: getRandomInt(0, 30),
      devHolding: getRandomInt(0, 10),

      isPaid: Math.random() > 0.8,
      bubbleMapPercentage: getRandomInt(5, 40),
      bubbleMapData: Array.from({ length: 15 }, () => ({
        x: getRandomInt(0, 100),
        y: getRandomInt(0, 100),
        r: getRandomInt(2, 10),
        color: `rgba(${getRandomInt(0, 255)}, ${getRandomInt(
          0,
          255
        )}, ${getRandomInt(0, 255)}, ${getRandomInt(0.6, 1)})`,
      })),

      socials: {
        telegram: Math.random() > 0.5,
        world: Math.random() > 0.7,
        feather: Math.random() > 0.8,
        pin: Math.random() > 0.9,
        search: Math.random() > 0.6,
        x: Math.random() > 0.4,
      },
      userIcons: {
        single: Math.random() > 0.5,
        double: Math.random() > 0.8,
      },

      // Randomly set birth time between 2s and 120s ago
      createdAt: now - getRandomInt(2000, 120000),
    };
  });
}
