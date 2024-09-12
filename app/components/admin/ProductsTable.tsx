import Image from "next/image";
import Link from "next/link";
import React from "react";

const fetchProducts = async () => {
  const items = await fetch("http://localhost:3001/api/products/all", {
    cache: "no-store",
  }).then((res) => res.json());
  return items;
};

const ProductsTable = async () => {
  const items = await fetchProducts();
  console.log(items, "items");
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs text-left text-gray-600">
        <thead className="text-xs text-gray-700 uppercase">
          <tr>
            <th scope="col" className="px-3 y-2">
              Title
            </th>
            <th scope="col" className="px-3 y-2">
              Description
            </th>
            <th scope="col" className="px-3 y-2">
              Image
            </th>
            <th scope="col" className="px-3 y-2">
              Price
            </th>
            <th scope="col" className="px-3 y-2">
              Category
            </th>
            <th scope="col" className="px-3 y-2">
              Stock
            </th>
            <th scope="col" className="px-3 y-2">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.length > 0 &&
            items.map((item: any) => (
              <tr>
                <td className="p-2">{item.title}</td>
                <td className="p-2">{item.description}</td>
                <td className="p-2">
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt={item.title}
                  />
                </td>
                <td className="p-2">{item.price}</td>
                <td className="p-2">{item.category}</td>
                <td className="p-2">{item.stock}</td>
                <td className="p-2">
                  <Link
                    href={`/admin/edit/${item.slug}`}
                    className="rounded bg-green-400 p-2 text-white"
                  >
                    Editar
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
