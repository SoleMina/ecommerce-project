"use client";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/firebase/config";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  logged: boolean;
  email: string | null;
  uid: number | null | string;
}

interface RegisterUser {
  email: string;
  password: string;
}

// Define the context value to include both user and setUser
interface AuthContextType {
  user: User;
  registerUser: (user: RegisterUser) => void;
  loginUser: (user: RegisterUser) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  console.log(context, "context");
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({
    logged: false,
    email: null,
    uid: null,
  });

  const registerUser = async (values: RegisterUser) => {
    console.log(auth, "auth");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      console.log(userCredential);

      const { user } = userCredential;

      setUser({
        logged: true,
        email: user.email,
        uid: user.uid,
      });
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const loginUser = async (values: RegisterUser) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );

    const { user } = userCredential;

    setUser({
      logged: true,
      email: user.email,
      uid: user.uid,
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
    });
    return () => {};
  }, []);

  return (
    <AuthContext.Provider value={{ user, registerUser, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};
