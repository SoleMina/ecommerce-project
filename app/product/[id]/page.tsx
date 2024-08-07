"use client";
import Counter from "@/app/components/Counter";
import mockData from "@/data/mockData";
import { ProductProps } from "@/types/Product";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);

  const singleProduct = mockData.find(
    (product: ProductProps) => product.id == Number(id)
  );
  console.log(mockData, "test");
  return (
    <>
      {singleProduct ? (
        <div className="rounded overflow-hidden m-4 flex">
          <div className="px-6 py-4">
            <Image
              src={singleProduct.image}
              width={300}
              height={300}
              alt={singleProduct.title}
            />
          </div>
          <div className="px-6 py-4 pb-2">
            <div className="font-bold text-3xl mb-2 pt-8">
              {singleProduct.title}
            </div>
            <p className="text-gray-700 text-base">
              {singleProduct.description}
            </p>
            <Counter stock={singleProduct.stock} />
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {singleProduct.category}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {singleProduct.price}
            </span>
          </div>
        </div>
      ) : (
        <div>
          <p>No hay productos con este id</p>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
