export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  slug: string;
}

export interface CartItem extends ProductProps {
  quantity: number;
}
