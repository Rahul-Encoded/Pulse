import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import TabHeader from "./TabHeader";
import TabRow from "./TabRow";

export default function Tab({ props }: { props: any }) {
    return (
        <div>
            <TabHeader props={props} />
            <Table className="border-r border-border">
                {/* <TableHeader>
                <TableRow>
                    <TableHead>Header 1</TableHead>
                    <TableHead>Header 2</TableHead>
                </TableRow>
            </TableHeader> */}
                {/* No table header for now */}
                <TableBody>
                    <TabRow props={props} />
                </TableBody>
            </Table>
        </div>
    )
}