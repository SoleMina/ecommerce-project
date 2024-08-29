"use client";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

// Define the type for a cart item
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

// Define the type for the context value
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
}

interface CartProviderProps {
  children: ReactNode;
}
const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

// Create the CartProvider component
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    console.log(cart, "cartt");
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
