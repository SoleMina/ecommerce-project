"use client";
import { CartItem } from "@/types/Product";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

// Define the type for the context value
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  cartCount: number;
  purchaseItems: (item: CartItem[]) => void;
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
  const [cartCount, setCartCount] = useState<number>(0);
  const storedCart = localStorage.getItem("cart");

  useEffect(() => {
    if (storedCart) {
      try {
        const parsedCart: CartItem[] = JSON.parse(storedCart);
        console.log("Loaded cart from local storage:", parsedCart);
        setCart(parsedCart);
        setCartCount(
          parsedCart.reduce((count, item) => count + item.quantity, 0)
        );
      } catch (error) {
        console.error("Error parsing cart data from local storage:", error);
      }
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log("Saving cart to local storage:", cart);
    } catch (error) {
      console.error("Error saving cart data to local storage:", error);
    }
    setCartCount(cart.reduce((count, item) => count + item.quantity, 0));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const itemExists = prevCart.some(
        (cartItem) => cartItem.slug === item.slug
      );

      if (itemExists) {
        return prevCart.map((cartItem) =>
          cartItem.slug === item.slug
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        return [...prevCart, item];
      }
    });
    setCartCount((prevCount) => prevCount + item.quantity);
  };

  const clearCart = () => {
    setCart([]);
  };

  const purchaseItems = (cart: CartItem[]) => {
    console.log("Purchased items:", cart);
    clearCart();
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount, purchaseItems }}>
      {children}
    </CartContext.Provider>
  );
};
