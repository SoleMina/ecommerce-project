import React from "react";
import Form from "../components/Form";

const LoginPage = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center m-4 align-middle">
      <h1 className="mb-6 mt-6 text-center text-3xl tracking-tight font-extrabold lg:text-5xl text-blue-600 dark:text-blue-700">
        Log In
      </h1>
      <Form />
    </div>
  );
};

export default LoginPage;
