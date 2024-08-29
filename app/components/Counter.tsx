"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useCartContext } from "./Context/CartContext";

const Counter = ({ stock, item }: { stock: number; item: any }) => {
  let [value, setValue] = useState(1);

  const { addToCart } = useCartContext();

  const increment = () => {
    if (value + 1 > stock) {
      Swal.fire({
        icon: "error",
        text: "Oops has alcanzado el monto máximo de stock",
      });
      return;
    }
    setValue(value + 1);
  };
  const decrease = () => {
    if (value === 0) return;
    setValue(value - 1);
  };

  const addProduct = () => {
    addToCart({ ...item, value });
    Swal.fire({
      title: "Success!",
      text: "Product has been added",
      icon: "success",
      confirmButtonText: "Cool",
    });
  };
  return (
    <>
      <div className="flex gap-5 p-6">
        <button className="bg-gray-400 pl-2 pr-2" onClick={decrease}>
          -
        </button>
        <span>{value}</span>
        <button className="bg-gray-400 pl-2 pr-2" onClick={increment}>
          +
        </button>
      </div>
      <button
        className="inline-block bg-blue-600 rounded-full p-3 text-md font-semibold text-white mr-2 mb-3 w-48"
        onClick={addProduct}
      >
        Add to cart
      </button>
    </>
  );
};

export default Counter;
