import { TabProps } from "../interface/types";

export default function TabTitle({ name }: Pick<TabProps, "name">) {
  return (
    <div className="">
      <h2 className="text-base font-semibold">{name}</h2>
    </div>
  );
}
