"use client";
import React from "react";
import CartInformation from "../components/CartInformation";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCartContext } from "../components/Context/CartContext";
import Swal from "sweetalert2";
import { CartItem } from "@/types/Product";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../components/Context/AuthContext";
import { User } from "@/types/user";

const Cart = () => {
  const { cart, purchaseItems, addOrder } = useCartContext();
  const { user } = useAuthContext();
  const router = useRouter();

  const handlePurchase = (cart: CartItem[], user: User) => {
    console.log(user, "userrr login");
    if (user.logged) {
      purchaseItems(cart);
      addOrder(cart, user);
      Swal.fire({
        title: "Thank you!",
        text: "Your purchase was successful",
        icon: "success",
        confirmButtonText: "Ok",
      });

      setTimeout(() => {
        router.push("/products");
      }, 1000);
      return;
    }
    Swal.fire({
      icon: "error",
      text: "User is not logged!",
    });
  };

  return (
    <div>
      <h1 className="mb-6 mt-6 text-center text-3xl tracking-tight font-extrabold lg:text-5xl text-blue-600 dark:text-blue-700">
        CART
      </h1>
      {cart && cart.length > 0 ? (
        <div>
          <CartInformation cart={cart} />

          <div className="cart--btn flex justify-center p-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handlePurchase(cart, user)}
            >
              Purchase
            </button>
          </div>
        </div>
      ) : (
        <div className="container mx-auto flex-row text-center">
          <ShoppingCartOutlined style={{ fontSize: "20rem", color: "blue" }} />
        </div>
      )}
    </div>
  );
};

export default Cart;
