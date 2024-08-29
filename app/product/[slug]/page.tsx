"use client";
import Counter from "@/app/components/Counter";
import { ProductProps } from "@/types/Product";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductDetail = () => {
  const [data, setData] = useState<ProductProps>();
  const { slug } = useParams();

  console.log(slug, "slug");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/product/${slug}`, {
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
  }, [slug]);

  return (
    <>
      {data ? (
        <div className="rounded overflow-hidden m-4 flex">
          <div className="px-6 py-4">
            <Image src={data.image} width={300} height={300} alt={data.title} />
          </div>
          <div className="px-6 py-4 pb-2">
            <div className="pb-4">
              <div className="font-bold text-3xl mb-2 pt-8">{data.title}</div>
              <p className="text-gray-700 text-base">{data.description}</p>
            </div>
            <hr />
            <Counter stock={data.stock} />
            <div className="p-4">
              <h4 className="mb-2">Categories:</h4>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {data.category}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {data.price}
              </span>
            </div>
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
