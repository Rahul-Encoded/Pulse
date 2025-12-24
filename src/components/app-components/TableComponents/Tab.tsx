import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import TabHeader from "./TabHeader";
import TabRow from "./TabRow";
import { TabProps } from "./interface/types";

export default function Tab({ name, number }: TabProps) {
    return (
        <div className="">
            <TabHeader name={name} number={number} />
            <Table className="">
                {/* <TableHeader>
                <TableRow>
                    <TableHead>Header 1</TableHead>
                    <TableHead>Header 2</TableHead>
                </TableRow>
            </TableHeader> */}
                {/* No table header for now */}
                <TableBody>
                    {/* <TabRow props={props} /> */}
                </TableBody>
            </Table>
        </div>
    )
}