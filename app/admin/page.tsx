import React from "react";
import ProductsTable from "../components/admin/ProductsTable";

const Admin = () => {
  return (
    <div>
      <h2 className="text-center text-2xl font-bold p-10">
        Panel de Administración
      </h2>
      <ProductsTable />
    </div>
  );
};

export default Admin;
