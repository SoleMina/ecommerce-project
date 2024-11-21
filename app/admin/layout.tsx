"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthContext } from "@/app/components/Context/AuthContext";

export default function AdminLayout({
  children,
  login,
}: {
  children: React.ReactNode; // For @children content
  login: React.ReactNode; // For @login content
}) {
  const { user } = useAuthContext();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (user?.logged && pathname === "/admin") {
      router.push("/admin/info"); // Redirect logged-in users to /admin/info
    }
  }, [user, pathname, router]);

  if (!user?.logged) {
    return <>{login}</>; // Show login content for unauthenticated users
  }

  return <>{children}</>;
}
