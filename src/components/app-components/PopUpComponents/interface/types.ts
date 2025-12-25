export interface PopUpHeaderProps {
  setIsPopUpOpen: (open: boolean) => void;
  title: string;
}

export interface TradingSettingsPopUpProps {
  presetId: string;
  isPopUpOpen: boolean;
  setIsPopUpOpen: (open: boolean) => void;
}
