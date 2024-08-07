"use client";
import mockData from "@/data/mockData";
import { getUniqueCategories } from "@/utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavigationMenu = () => {
  const categories = getUniqueCategories(mockData);
  console.log(categories, "categories");

  const path = usePathname();
  return (
    <div className="bg-blue-600  dark:bg-blue-800  p-4">
      <ul className="flex space-x-4 justify-center">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`text-white ${
              path === "/products/" + category.toLowerCase()
                ? "underline"
                : "no-underline"
            }`}
          >
            <Link href={`/products/${category.toLowerCase()}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationMenu;
