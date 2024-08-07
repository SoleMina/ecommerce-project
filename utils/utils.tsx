import { ProductProps } from "@/types/Product";

export const getUniqueCategories = (data: ProductProps[]): string[] => {
  const categories = data.map((item) => item.category);
  return [...new Set(categories)];
};
