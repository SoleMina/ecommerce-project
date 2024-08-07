"use client";
import React, { useState } from "react";

const Counter = ({ stock }: { stock: number }) => {
  let [value, setValue] = useState(0);

  const increment = () => {
    if (value + 1 > stock) return;
    setValue(value + 1);
  };
  const decrease = () => {
    if (value === 0) return;
    setValue(value - 1);
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
      <button className="inline-block bg-blue-600 rounded-full p-3 text-md font-semibold text-white mr-2 mb-3 w-48">
        Add to cart
      </button>
    </>
  );
};

export default Counter;
