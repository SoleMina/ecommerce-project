"use client";
import React from "react";
import Image from "next/image";
import { CartItem } from "@/types/Product";

interface CartInformationProps {
  cart: CartItem[];
}

//const CartInformation: React.FC<{ cart: CartItem[] }> = ({ cart }) =>

const CartInformation: React.FC<CartInformationProps> = ({ cart }) => {
  return (
    <div className="cart">
      <div className="container mx-auto px-4">
        {cart.map((product: CartItem) => (
          <div
            className="product flex justify-between w-full"
            key={product.title}
          >
            <Image
              src={product.image}
              alt={product.title}
              width={100}
              height={100}
            />
            <div className="info">
              <h4>{product.title}</h4>
              <p>{product.description}</p>
            </div>
            <div className="price">
              <p>
                <span>Price: </span>
                {product.price * product.quantity}
              </p>
              <p>
                <span>Units: </span>
                {product.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartInformation;
