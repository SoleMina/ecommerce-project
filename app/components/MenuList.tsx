import { MenuProps } from "@/types/Menu";
import Link from "next/link";
import React from "react";

const MenuList: React.FC<MenuProps> = ({ open, handleClose }) => {
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
        <nav className="flex mt-4 flex-col gap-3 px-3">
          <Link href="/about" onClick={handleClose} className="text-white p-2">
            About Us
          </Link>
          <Link href="#" onClick={handleClose} className="text-white p-2">
            Store
          </Link>
          <Link href="#" onClick={handleClose} className="text-white p-2">
            Cart
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default MenuList;
