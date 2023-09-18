import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyroVbbpK8Eh27cWIz0eFDir6pOice8g8",
  authDomain: "instagram-clone-s.firebaseapp.com",
  projectId: "instagram-clone-s",
  storageBucket: "instagram-clone-s.appspot.com",
  messagingSenderId: "989087714127",
  appId: "1:989087714127:web:d2098370def84da9a5533a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
