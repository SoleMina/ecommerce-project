import { ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";

const Cart = () => {
  return (
    <div className="container mx-auto flex-row text-center">
      <h1 className="mb-6 mt-6 text-center text-3xl tracking-tight font-extrabold lg:text-5xl text-blue-600 dark:text-blue-700">
        CART
      </h1>
      <ShoppingCartOutlined style={{ fontSize: "20rem", color: "blue" }} />
    </div>
  );
};

export default Cart;
