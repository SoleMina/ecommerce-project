"use client";
import React from "react";
import Image from "next/image";
import { CartItem } from "@/types/Product";

interface CartInformationProps {
  cart: CartItem[];
}

//const CartInformation: React.FC<{ cart: CartItem[] }> = ({ cart }) =>

const CartInformation: React.FC<CartInformationProps> = ({ cart }) => {
  const totalPrice = cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
  return (
    <div className="cart">
      <div className="container mx-auto px-4">
        {cart.map((product: CartItem, index: number) => (
          <div
            className={`product p-4 flex justify-between w-full border-gray-500 border-2 border-b-0 ${
              index == cart.length - 1 && "border-b-2"
            } `}
            key={product.title}
          >
            <Image
              src={product.image}
              alt={product.title}
              width={130}
              height={100}
            />
            <div className="info">
              <h4>{product.title}</h4>
              <p>{product.description}</p>
            </div>
            <div className="price">
              <p>
                <span>Price: </span>
                S/ {product.price * product.quantity}
              </p>
              <p>
                <span>Units: </span>
                {product.quantity}
              </p>
            </div>
          </div>
        ))}
        <div className="price text-center p-10">
          <h3>Total: S/ {totalPrice}</h3>
        </div>
      </div>
    </div>
  );
};

export default CartInformation;
