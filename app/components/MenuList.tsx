import { MenuProps } from "@/types/Menu";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import { useCartContext } from "./Context/CartContext";
import { useAuthContext } from "./Context/AuthContext";

const MenuList: React.FC<MenuProps> = ({ open, handleClose }) => {
  const { cartCount } = useCartContext();
  const { logOut, user } = useAuthContext();
  console.log(logOut, "logout");
  return (
    <nav className={`flex mt-4 gap-3 px-3 ${open ? "flex-col" : ""}`}>
      <Link href="/products" onClick={handleClose} className="text-white p-2">
        Products
      </Link>
      <Link href="/about" onClick={handleClose} className="text-white p-2">
        About Us
      </Link>
      <Link href="/admin" onClick={handleClose} className="text-white p-2">
        Admin
      </Link>
      <Link href="/cart" onClick={handleClose} className="text-white p-2">
        <ShoppingCartOutlined style={{ fontSize: "20px", color: "white" }} />
        {cartCount > 0 && <span>{cartCount}</span>}
      </Link>
      {user.logged && (
        <a href="" onClick={logOut} className="text-white p-2">
          Logout
        </a>
      )}
    </nav>
  );
};

export default MenuList;
