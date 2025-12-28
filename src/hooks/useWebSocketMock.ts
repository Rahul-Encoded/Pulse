import { useEffect, useRef } from "react";
import { useAppDispatch } from "../lib/hooks";
import { setTokens, updateTokens } from "../lib/features/tokens/tokensSlice";
import { generateSeedTokens } from "../lib/mock/seedData";
import { Update } from "@reduxjs/toolkit";
import { Token } from "../lib/interface/tokens";

export const useWebSocketMock = () => {
  const dispatch = useAppDispatch();
  const isInitialized = useRef(false);

  useEffect(() => {
    // 1. Initialize with Seed Data
    if (!isInitialized.current) {
      const initialTokens = generateSeedTokens();
      dispatch(setTokens(initialTokens));
      isInitialized.current = true;
    }

    // 2. Start the Simulation Loop (Phase B)
    let timeoutId: NodeJS.Timeout;

    const simulateUpdate = () => {
      // Pick a random interval between 400ms and 1500ms to mimic network jitter
      const nextTick = Math.random() * 1100 + 400;

      timeoutId = setTimeout(() => {
        // Redux Toolkit provides a way to update entities by their ID
        // We'll dispatch a batch update (Phase C)

        // In a real hook, we'd select current tokens, but for simplicity
        // in a mock, we can just send "deltas" to some random IDs.
        // For this demo, we'll pick 1-3 random tokens to update.

        // Note: In a real scenario, we'd get the IDs from the store.
        // For this mock, we'll use the addresses from seedData if we had easy access,
        // or just let the loop run once the state is populated.

        dispatch((dispatch, getState) => {
          const state = getState();
          const allIds = state.tokens.ids as string[];

          if (allIds.length > 0) {
            const numToUpdate = Math.floor(Math.random() * 3) + 1;
            const updates: Update<Token, string>[] = [];

            for (let i = 0; i < numToUpdate; i++) {
              const randomId =
                allIds[Math.floor(Math.random() * allIds.length)];
              const token = state.tokens.entities[randomId];

              if (token) {
                // Randomly fluctuate all numerical values
                const mcDelta =
                  (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 50);
                const volDelta = Math.random() * 100;
                const isBuy = Math.random() > 0.4;

                // Holding percentages fluctuation
                const fluctuatePercent = (val: number) =>
                  Math.min(
                    100,
                    Math.max(0, val + (Math.random() > 0.5 ? 0.05 : -0.05))
                  );

                updates.push({
                  id: randomId,
                  changes: {
                    marketCap: Math.max(0, token.marketCap + mcDelta),
                    volume: token.volume + volDelta,
                    transactions: {
                      buys: token.transactions.buys + (isBuy ? 1 : 0),
                      sells: token.transactions.sells + (!isBuy ? 1 : 0),
                    },
                    bondingValue: Math.min(
                      100,
                      token.bondingValue + Math.random() * 0.1
                    ),
                    globalFees: parseFloat(
                      Math.max(
                        0,
                        token.globalFees +
                          Math.random() * 0.001 * (Math.random() > 0.5 ? 1 : -1)
                      ).toFixed(3)
                    ),

                    // Holder metrics (tend to increase)
                    holdersCount:
                      token.holdersCount + (Math.random() > 0.8 ? 1 : 0),
                    proTradersCount:
                      token.proTradersCount + (Math.random() > 0.95 ? 1 : 0),
                    kolsCount: token.kolsCount + (Math.random() > 0.99 ? 1 : 0),
                    devMigrationsCount:
                      token.devMigrationsCount + (Math.random() > 0.9 ? 1 : 0),

                    // Holdings
                    bundleHolding: parseFloat(
                      fluctuatePercent(token.bundleHolding).toFixed(2)
                    ),
                    insiderHolding: parseFloat(
                      fluctuatePercent(token.insiderHolding).toFixed(2)
                    ),
                    sniperHolding: parseFloat(
                      fluctuatePercent(token.sniperHolding).toFixed(2)
                    ),
                    devHolding: parseFloat(
                      fluctuatePercent(token.devHolding).toFixed(2)
                    ),

                    // Bubble Map
                    bubbleMapPercentage: parseFloat(
                      fluctuatePercent(token.bubbleMapPercentage).toFixed(2)
                    ),
                    bubbleMapData: token.bubbleMapData.map((p) => ({
                      ...p,
                      x: Math.min(
                        100,
                        Math.max(0, p.x + (Math.random() * 0.4 - 0.2))
                      ),
                      y: Math.min(
                        100,
                        Math.max(0, p.y + (Math.random() * 0.4 - 0.2))
                      ),
                      r: Math.min(
                        15,
                        Math.max(1, p.r + (Math.random() * 0.2 - 0.1))
                      ),
                    })),
                  },
                });
              }
            }

            dispatch(updateTokens(updates));
          }
        });

        simulateUpdate();
      }, nextTick);
    };

    simulateUpdate();

    return () => clearTimeout(timeoutId);
  }, [dispatch]);
};
