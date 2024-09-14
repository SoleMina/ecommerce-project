import React from "react";
import { useAuthContext } from "../Context/AuthContext";

const LogOutButton = () => {
  const logout = useAuthContext();
  console.log(logout);

  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Log Out
    </button>
  );
};

export default LogOutButton;
