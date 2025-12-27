import Tab from "./TableComponents/Tab";
import { TabProps } from "./TableComponents/interface/types";

const names = ["New Pairs", "Final Stretch", "Migrated"];

export default function TokenTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border border border-border rounded-lg overflow-hidden h-[calc(100vh-80px)]">
      {names.map((name, index) => (
        <Tab key={index} name={name} />
      ))}
    </div>
  );
}
