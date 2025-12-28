import { UiState } from "@/lib/interface/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UiState = {
  activeTab: "New Pairs",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = uiSlice.actions;
export const selectActiveTab = (state: { ui: UiState }) => state.ui.activeTab;
export default uiSlice.reducer;
