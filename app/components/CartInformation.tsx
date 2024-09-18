"use client";
import React from "react";
import Image from "next/image";
import { CartItem } from "@/types/Product";
import { DeleteOutlined } from "@ant-design/icons";
import { useCartContext } from "./Context/CartContext";
import Swal from "sweetalert2";

interface CartInformationProps {
  cart: CartItem[];
}

//const CartInformation: React.FC<{ cart: CartItem[] }> = ({ cart }) =>

const CartInformation: React.FC<CartInformationProps> = ({ cart }) => {
  const { deleteProduct } = useCartContext();

  const totalPrice = cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const handleDelete = (slug: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(slug);
        Swal.fire({
          title: "Deleted!",
          text: "Product has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="cart">
      <div className="container mx-auto px-4">
        {cart.map((product: CartItem, index: number) => (
          <div
            className={`product p-4 flex justify-between w-full border-gray-500 border-2 border-b-0 ${
              index == cart.length - 1 && "border-b-2"
            } `}
            key={product.title}
          >
            <Image
              src={product.image}
              alt={product.title}
              width={130}
              height={100}
            />
            <div className="info">
              <h4>{product.title}</h4>
              <p>{product.description}</p>
            </div>
            <div className="price flex items-start gap-6">
              <div>
                <p>
                  <span>Price: </span>
                  S/ {product.price * product.quantity}
                </p>
                <p>
                  <span>Units: </span>
                  {product.quantity}
                </p>
              </div>
              <DeleteOutlined onClick={() => handleDelete(product.slug)} />
            </div>
          </div>
        ))}
        <div className="price text-center p-10">
          <h3>Total: S/ {totalPrice}</h3>
        </div>
      </div>
    </div>
  );
};

export default CartInformation;
