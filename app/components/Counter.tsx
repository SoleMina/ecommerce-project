"use client";
import React, { useState } from "react";

const Counter = () => {
  let [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };
  const decrease = () => {
    if (value === 0) return;
    setValue(value - 1);
  };
  return (
    <div className="flex gap-5">
      <button onClick={decrease}>-</button>
      <span>{value}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
