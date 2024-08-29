"use client";
import ProductList from "@/app/components/ProductList";
import { ProductProps } from "@/types/Product";
import { useParams } from "next/navigation";

const ProductCategory = () => {
  const { category } = useParams() as { category: string };
  return (
    <div>
      <h1 className="mb-6 mt-6 text-center text-2xl tracking-tight font-extrabold lg:text-3xl text-blue-600 dark:text-blue-700">
        Category: {decodeURIComponent(category)}
      </h1>
      <ProductList category={category} />
    </div>
  );
};

export default ProductCategory;
