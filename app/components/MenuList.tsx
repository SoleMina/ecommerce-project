import { MenuProps } from "@/types/Menu";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";

const MenuList: React.FC<MenuProps> = ({ open, handleClose }) => {
  return (
    <nav className={`flex mt-4 gap-3 px-3 ${open ? "flex-col" : ""}`}>
      <Link href="/products" onClick={handleClose} className="text-white p-2">
        Products
      </Link>
      <Link href="/about" onClick={handleClose} className="text-white p-2">
        About Us
      </Link>
      <Link href="/login" onClick={handleClose} className="text-white p-2">
        Admin
      </Link>
      <Link href="/cart" onClick={handleClose} className="text-white p-2">
        <ShoppingCartOutlined style={{ fontSize: "20px", color: "white" }} />
      </Link>
    </nav>
  );
};

export default MenuList;
