import { configureStore } from "@reduxjs/toolkit";
import presetsReducer from "./features/presets/presetsSlice";
import tokensReducer from "./features/tokens/tokensSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      presets: presetsReducer,
      tokens: tokensReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
