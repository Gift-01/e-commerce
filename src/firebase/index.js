// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4LGykipkXQ82Et3UIJpIvNFZWOt_tipk",
  authDomain: "e-commerce-7d8e5.firebaseapp.com",
  projectId: "e-commerce-7d8e5",
  storageBucket: "e-commerce-7d8e5.appspot.com",
  messagingSenderId: "60295753227",
  appId: "1:60295753227:web:0ae1b69b1b9c4d689d610e",
  measurementId: "G-E7RREJZW1T",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
