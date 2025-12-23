import {
    MenubarContent,
    MenubarItem,
    MenubarSeparator,
} from "@/components/ui/menubar"

export default function TabPresetsContent() {
    return (
        <MenubarContent className="min-w-[4rem]">
            <MenubarItem className="text-xs py-1 px-2">20%</MenubarItem>
            <MenubarItem className="text-xs py-1 px-2">0.001</MenubarItem>
            <MenubarItem className="text-xs py-1 px-2">0.01</MenubarItem>
            <MenubarItem className="text-xs py-1 px-2">off</MenubarItem>
        </MenubarContent>
    );
}