import React from "react";
import ProductCard from "./ProductCard";
import { ProductProps } from "@/types/Product";

interface ProductListProps {
  data: ProductProps[];
  category: string;
}

const ProductList: React.FC<ProductListProps> = ({ data, category }) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {data.map((product, index) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
        />
      ))}
    </div>
  );
};

export default ProductList;
