"use client";
import React from "react";
import { useAuthContext } from "@/app/components/Context/AuthContext"; // Ensure correct path

const AdminLayout = ({
  children,
  login,
}: {
  children: React.ReactNode; // For the admin content
  login: React.ReactNode; // For the login content
}) => {
  const { user } = useAuthContext();

  console.log(user, "userrrrrrr");

  // If user is logged in, show admin children, otherwise show the login page
  return <>{user.logged ? children : login}</>;
};

export default AdminLayout;
