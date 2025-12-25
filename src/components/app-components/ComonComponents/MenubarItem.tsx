import { MenubarItem } from "@/components/ui/menubar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { MenubarIconItemProps } from "./interface/types";

export function MenubarIconItem({
  path,
  children,
  className,
  ...props
}: MenubarIconItemProps) {
  return (
    <MenubarItem
      className={cn(
        "text-xs py-1 px-2 focus:bg-transparent focus:text-muted-foreground flex items-center gap-2",
        className
      )}
      {...props}
    >
      <Image src={path} alt={path} width={12} height={12} />
      {children}
    </MenubarItem>
  );
}
