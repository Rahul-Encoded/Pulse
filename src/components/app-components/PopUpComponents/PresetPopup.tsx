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
import { MevModeState, TradeState } from "@/lib/interface/types";
import {
  setBribe,
  setPriority,
  setSlippage,
} from "@/lib/features/trade/tradeSlice";
import { setMevMode } from "@/lib/features/trade/mevModeSlice";

export default function PresetPopup({
  setIsPopUpOpen,
}: {
  setIsPopUpOpen: (open: boolean) => void;
}) {
  const dispatch = useAppDispatch();

  const reduxValues = useAppSelector((state) => state.trade);
  const reduxMevMode = useAppSelector((state) => state.mevMode);

  const [localValues, setLocalValues] = useState<TradeState>(reduxValues);
  const [localMevMode, setLocalMevMode] = useState<MevModeState>(reduxMevMode);

  const handleValueChange = (parameter: string, value: number) => {
    setLocalValues((prev) => ({ ...prev, [parameter.toLowerCase()]: value }));
  };

  const handleContinue = () => {
    dispatch(setSlippage(localValues.slippage));
    dispatch(setPriority(localValues.priority));
    dispatch(setBribe(localValues.bribe));
    dispatch(setMevMode(localMevMode.mevMode));

    setIsPopUpOpen(false);

    console.log("Commited", localValues);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center text-xs">
      <BuyOrSellTab></BuyOrSellTab>

      <TradeParameterInput values={localValues} onChange={handleValueChange} />

      <div className="flex justify-between items-center w-full">
        <AutoFee></AutoFee>
        <MaxFee></MaxFee>
      </div>

      <MevMode mevMode={localMevMode} setMevMode={setLocalMevMode}></MevMode>
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
