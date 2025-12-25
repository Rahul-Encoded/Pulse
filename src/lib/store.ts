import { configureStore } from "@reduxjs/toolkit";
import tradeReducer from "./features/trade/tradeSlice";
import mevModeReducer from "./features/trade/mevModeSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      trade: tradeReducer,
      mevMode: mevModeReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
