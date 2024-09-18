"use client";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "@/firebase/config";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { RegisterUser, User } from "@/types/user";

interface AuthProviderProps {
  children: ReactNode;
}

// Define the context value to include both user and setUser
interface AuthContextType {
  user: User;
  registerUser: (user: RegisterUser) => void;
  loginUser: (user: RegisterUser) => void;
  logOut: () => void;
  loginGoogle: () => void;
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
      await createUserWithEmailAndPassword(auth, values.email, values.password);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const loginUser = async (values: RegisterUser) => {
    await signInWithEmailAndPassword(auth, values.email, values.password);
  };

  const loginGoogle = async () => {
    await signInWithPopup(auth, provider);
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);

      if (user) {
        setUser({
          logged: true,
          email: user.email,
          uid: user.uid,
        });
      } else {
        setUser({
          logged: false,
          email: null,
          uid: null,
        });
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, registerUser, loginUser, logOut, loginGoogle }}
    >
      {children}
    </AuthContext.Provider>
  );
};
