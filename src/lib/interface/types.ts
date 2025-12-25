export interface PresetSettings {
  slippage: number;
  priority: number;
  bribe: number;
  mevMode: string;
}

export interface PresetsState {
  presets: Record<string, PresetSettings>;
}
