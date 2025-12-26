import { TabProps } from "../interface/types";
import TabTitle from "./TabTitle";
import TabStats from "./TabStats";
import TabPresets from "./TabPresets";
import TabFilterAction from "./TabFilterAction";

export default function TabHeader({ name, number }: TabProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-table h-12 border border-border">
      <TabTitle name={name} />

      <div className="flex items-center gap-4">
        <div className="flex items-center border border-border rounded-full py-0 px-2 gap-2 bg-secondary/20">
          <TabStats number={number} />
          <TabPresets />
        </div>

        <TabFilterAction />
      </div>
    </div>
  );
}
