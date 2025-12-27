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
                // Randomly fluctuate Market Cap, Volume, and Transactions
                const mcDelta =
                  (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 50);
                const volDelta = Math.random() * 100;
                const isBuy = Math.random() > 0.4; // 60% chance of a buy

                updates.push({
                  id: randomId,
                  changes: {
                    marketCap: Math.max(0, token.marketCap + mcDelta),
                    volume: token.volume + volDelta,
                    transactions: {
                      buys: token.transactions.buys + (isBuy ? 1 : 0),
                      sells: token.transactions.sells + (!isBuy ? 1 : 0),
                    },
                    // Bonding value slowly creeps up
                    bondingValue: Math.min(
                      100,
                      token.bondingValue + Math.random() * 0.1
                    ),
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
