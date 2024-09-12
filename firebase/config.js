// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsCYr9wPNZ2KISyzeRQxX5bIcX-3fq0vw",
  authDomain: "ecommerce-products-ecec4.firebaseapp.com",
  projectId: "ecommerce-products-ecec4",
  storageBucket: "ecommerce-products-ecec4.appspot.com",
  messagingSenderId: "237717154397",
  appId: "1:237717154397:web:e0e0098806e950f333bbb4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
