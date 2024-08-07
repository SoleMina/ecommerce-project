import { MenuProps } from "@/types/Menu";
import Link from "next/link";
import React from "react";
import MenuList from "./MenuList";

const MenuMobile: React.FC<MenuProps> = ({ open, handleClose }) => {
  return (
    <div
      className={`${
        open ? "opacity-100 visible" : "opacity-0 hidden"
      } transition-all-fixed inset-0 bg-black/50 flex justify-end`}
    >
      <aside
        className={`${
          open ? "translate-x-48" : ""
        }'transition-all w-48 bg-gray-500'`}
      >
        <div
          onClick={handleClose}
          className="text-white text-right cursor-pointer"
        >
          X
        </div>
        <MenuList open={open} handleClose={handleClose} />
      </aside>
    </div>
  );
};

export default MenuMobile;
