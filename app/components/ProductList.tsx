import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductProps } from "@/types/Product";

interface ProductListProps {
  category?: string;
}

const ProductList: React.FC<ProductListProps> = ({ category }) => {
  const [data, setData] = useState<ProductProps[]>([]);

  console.log(category, "category");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/products/${category}`, {
          cache: "no-store",
        });

        if (response.ok) {
          const result = await response.json();
          console.log(result, "resultttt");
          setData(result); // Set the fetched data to state
        } else {
          console.error("Failed to fetch data, status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [category]);
  return (
    <div className="flex flex-wrap justify-center items-center">
      {data &&
        data.length > 0 &&
        data.map((product, index) => (
          <div key={product.slug}>
            <ProductCard
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              category={product.category}
              image={product.image}
              stock={product.stock}
              slug={product.slug}
            />
          </div>
        ))}
    </div>
  );
};

export default ProductList;
