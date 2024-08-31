"use client";
import React from "react";
import CartInformation from "../components/CartInformation";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCartContext } from "../components/Context/CartContext";

const Cart = () => {
  const { cart } = useCartContext();
  return (
    <div>
      <h1 className="mb-6 mt-6 text-center text-3xl tracking-tight font-extrabold lg:text-5xl text-blue-600 dark:text-blue-700">
        CART
      </h1>
      {cart && cart.length > 0 ? (
        <div>
          <CartInformation cart={cart} />
        </div>
      ) : (
        <div className="container mx-auto flex-row text-center">
          <ShoppingCartOutlined style={{ fontSize: "20rem", color: "blue" }} />
        </div>
      )}
    </div>
  );
};

export default Cart;
