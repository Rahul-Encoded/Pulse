import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MevModeState } from "../../interface/types";

const initialState: MevModeState = {
  mevMode: "Off",
};

export const mevModeSlice = createSlice({
  name: "mevMode",
  initialState,
  reducers: {
    setMevMode: (state, action: PayloadAction<string>) => {
      state.mevMode = action.payload;
    },
  },
});

export const { setMevMode } = mevModeSlice.actions;

export default mevModeSlice.reducer;
