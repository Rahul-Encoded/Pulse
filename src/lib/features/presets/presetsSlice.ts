import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PresetsState, PresetSettings } from "../../interface/types";

export const defaultPresetSettings: PresetSettings = {
  slippage: 20,
  priority: 0.001,
  bribe: 0.01,
  mevMode: "Off",
};

const initialState: PresetsState = {
  presets: {
    P1: { ...defaultPresetSettings },
    P2: { ...defaultPresetSettings },
    P3: { ...defaultPresetSettings },
  },
};

export const presetsSlice = createSlice({
  name: "presets",
  initialState,
  reducers: {
    updatePresetSettings: (
      state,
      action: PayloadAction<{ id: string; settings: PresetSettings }>
    ) => {
      const { id, settings } = action.payload;
      state.presets[id] = settings;
    },
  },
});

export const { updatePresetSettings } = presetsSlice.actions;

export default presetsSlice.reducer;
