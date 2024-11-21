import React from "react";
import ProductsTable from "../../../components/admin/ProductsTable";
import Link from "next/link";

const Admin = () => {
  return (
    <div>
      <h2 className="text-center text-2xl font-bold p-10">
        Panel de Administración
      </h2>
      <div className="container mb-10">
        <Link href="/admin/create">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create a new product
          </button>
        </Link>
      </div>
      <ProductsTable />
    </div>
  );
};

export default Admin;
