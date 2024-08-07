"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto">
      {/* <h1 className="text-4xl text-blue-600">Página no encontrada</h1> */}
      <h1 className="mb-4 mt-6 text-4xl tracking-tight font-extrabold lg:text-6xl text-blue-600 dark:text-blue-700">
        Página no encontrada
      </h1>
      <hr />
      <p className="text-base mt-4">
        La ruta a la que intestas acceder no existe
      </p>
      <button
        className="inline-flex text-white bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4"
        onClick={() => router.back()}
      >
        Volver
      </button>
    </div>
  );
};

export default NotFound;
