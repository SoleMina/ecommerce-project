"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import ProductList from "../components/ProductList";

const Articles = () => {
  // const path = usePathname();
  return (
    <div className="container mx-auto">
      <h1 className="mb-4 mt-6 text-center text-3xl tracking-tight font-extrabold lg:text-5xl text-blue-600 dark:text-blue-700">
        Products
      </h1>
      {/* <br />
      {path} */}
      <ProductList category={"all"} />
    </div>
  );
};

export default Articles;
