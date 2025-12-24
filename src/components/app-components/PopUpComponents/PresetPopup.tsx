import { Button } from "@/components/ui/button";

import TradeParameterInput from "./TradeParameterInput";
import AutoFee from "./AutoFee";
import MaxFee from "./MaxFee";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group";
import BuyOrSellTab from "./BuyOrSellTab";
import MevMode from "./MevMode";
import Seperator from "../ComonComponents/Seperator";

export default function PresetPopup() {

    return (
        <div className="flex flex-col gap-4 justify-center items-center text-xs">

            <BuyOrSellTab></BuyOrSellTab>

            <TradeParameterInput />

            <div className="flex justify-between items-center w-full">
                <AutoFee></AutoFee>
                <MaxFee></MaxFee>
            </div>

            <MevMode></MevMode>
            <InputGroup className="rounded-full">
                <InputGroupInput className="!pl-1" placeholder="https://a...e.com"></InputGroupInput>
                <InputGroupAddon>
                    <InputGroupText>RPC</InputGroupText>
                </InputGroupAddon>
            </InputGroup>

            <Seperator className="w-[calc(100%+3rem)] -mx-6 my-2"></Seperator>

            <Button className="rounded-full bg-blue-700 text-background w-full">Continue</Button>

        </div>
    );
}