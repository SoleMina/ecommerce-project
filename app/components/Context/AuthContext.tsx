"use client";
import { createContext, ReactNode, useContext, useState } from "react";

const AuthContext = createContext<any>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  logged: boolean;
  email: string | null;
  uid: number | null;
}

export const useAuthContext = () => useContext(AuthContext);

// export const useAuthContext = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuthontext must be used within a AuthProvider");
//   }
//   return context;
// };

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({
    logged: false,
    email: null,
    uid: null,
  });

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
