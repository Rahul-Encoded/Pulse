import { Button } from "@/components/ui/button";

import TradeParameterInput from "./TradeParameterInput";
import AutoFee from "./AutoFee";
import MaxFee from "./MaxFee";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import BuyOrSellTab from "./BuyOrSellTab";
import MevMode from "./MevMode";
import Seperator from "../ComonComponents/Seperator";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useState } from "react";
import { PresetSettings } from "@/lib/interface/types";
import {
  defaultPresetSettings,
  updatePresetSettings,
} from "@/lib/features/presets/presetsSlice";

export default function PresetPopup({
  presetId,
  setIsPopUpOpen,
}: {
  presetId: string;
  setIsPopUpOpen: (open: boolean) => void;
}) {
  const dispatch = useAppDispatch();

  const reduxSettings = useAppSelector(
    (state) => state.presets.presets[presetId]
  );

  {
    /*
    state.presets.presets[presetId]:
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
    */
  }

  const [localSettings, setLocalSettings] = useState<PresetSettings>(
    reduxSettings || defaultPresetSettings
  );

  const handleValueChange = (parameter: string, value: number) => {
    setLocalSettings((prev) => ({
      ...prev,
      [parameter.toLowerCase()]: value,
    }));
  };

  const handleContinue = () => {
    dispatch(
      updatePresetSettings({
        id: presetId,
        settings: localSettings,
      })
    );

    setIsPopUpOpen(false);

    console.log("Commited", localSettings);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center text-xs">
      <BuyOrSellTab></BuyOrSellTab>

      <TradeParameterInput
        values={localSettings}
        onChange={handleValueChange}
      />

      <div className="flex justify-between items-center w-full">
        <AutoFee></AutoFee>
        <MaxFee></MaxFee>
      </div>

      <MevMode
        mevMode={{ mevMode: localSettings.mevMode }}
        setMevMode={(value) =>
          setLocalSettings((prev) => ({ ...prev, mevMode: value.mevMode }))
        }
      ></MevMode>
      <InputGroup className="rounded-full">
        <InputGroupInput
          className="!pl-1"
          placeholder="https://a...e.com"
        ></InputGroupInput>
        <InputGroupAddon>
          <InputGroupText>RPC</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <Seperator className="w-[calc(100%+3rem)] -mx-6 my-2"></Seperator>

      <Button
        className="rounded-full bg-blue-700 text-background w-full"
        onClick={handleContinue}
      >
        Continue
      </Button>
    </div>
  );
}
