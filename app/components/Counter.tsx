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
    <div className="flex gap-5 p-6">
      <button onClick={decrease}>-</button>
      <span>{value}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
