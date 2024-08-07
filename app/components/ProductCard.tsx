import { ProductProps } from "@/types/Product";
import Link from "next/link";
import React from "react";

const ProductCard: React.FC<ProductProps> = ({
  id,
  title,
  description,
  price,
  category,
}) => {
  return (
    <Link href={`/articles/${id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 py-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {category}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {price}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
