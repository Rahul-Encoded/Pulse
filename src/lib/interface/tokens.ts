export type TokenStatus1 = "New Pairs" | "Final Stretch" | "Migrated";
export type TokenStatus2 = "Migrating" | "Idle";
export type TokenStatus3 = "Risk" | "Safe" | "Migrated";
export type ImageBorderColor = "red" | "green" | "yellow";
export type SocialIcon = string;

export interface TransactionData {
  buys: number;
  sells: number;
}

export interface BubblePoint {
  x: number;
  y: number;
  r: number;
}

export interface Token {
  id: string; // Unique identifier (e.g., token address)

  // Status and Identity
  status1: TokenStatus1;
  status2: TokenStatus2; // Relevent if status1 === "Final Stretch"
  status3: TokenStatus3; // Relevent if status1 === "Migrated"
  imageUrl: string;
  imageBorderColor: ImageBorderColor;
  name: string;
  symbol: string;
  address: string;

  // Real-time Market Data
  bondingValue: number;
  marketCap: number;
  mcColor: string;
  volume: number;
  transactions: TransactionData;
  globalFees: number;

  // Holder & Social Metrics
  holdersCount: number;
  proTradersCount: number;
  kolsCount: number;
  devMigrationsCount: number;

  // Percentages for badges/bottom line
  bundleHolding: number;
  insiderHolding: number;
  sniperHolding: number;
  devHolding: number;

  // Indicators & Special UI Elements
  isPaid: boolean;
  bubbleMapPercentage: number;
  bubbleMapData: BubblePoint[]; // Randomized set of numbers to visualize bubbleMaps

  // Dynamic Icons
  socials: {
    telegram: boolean;
    world: boolean;
    feather: boolean;
    pin: boolean;
    search: boolean;
    x: boolean;
  };
  userIcons: {
    single: boolean;
    double: boolean;
  };

  // Timing
  createdAt: number; // Timestamp of creation (used to calculate elapsed seconds like "9s", "2s" in UI)
}
