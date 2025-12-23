import Tab from "./TableComponents/Tab";

export default function TokenTable({ props }: { props: any }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Tab props={props}></Tab>
            <Tab props={props}></Tab>
            <Tab props={props}></Tab>
        </div>
    )
}