"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { AlignRight } from "lucide-react";
import Link from "next/link";
import { List } from "@/utils/menulist";

const Dropdown = () => {
  return (
    <Menubar className="bg-red-900 border-none p-2">
      <MenubarMenu>
        <MenubarTrigger
          className="group bg-red-900 px-2 py-1 rounded focus:outline-none               group-data-[state=open]:bg-red-900
              group-data-[state=closed]:bg-red-900"
          aria-label="Open menu"
        >
          <AlignRight
            className="
              w-full h-full p-0.5 rounded
              text-white
              group-focus:bg-red-900
              group-data-[state=open]:text-red-900
              group-data-[state=closed]:bg-red-900
            "
          />
        </MenubarTrigger>

        <MenubarContent className="bg-white border-none shadow-md">
          {List.map((item) => (
            <MenubarItem
              key={item.label}
              asChild
              className="hover:bg-red-800 focus:bg-red-800 text-black hover:text-white"
            >
              <Link href={item.href}>{item.label}</Link>
            </MenubarItem>
          ))}
          <MenubarSeparator className="bg-red-700" />
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Dropdown;
