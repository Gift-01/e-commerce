import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBI5PRdezRoWE9XO_f1d1vSIURbREL4fI",
  authDomain: "vue-e-commerce-233d1.firebaseapp.com",
  projectId: "vue-e-commerce-233d1",
  storageBucket: "vue-e-commerce-233d1.appspot.com",
  messagingSenderId: "764010562428",
  appId: "1:764010562428:web:784ec7bce77f1cfc959af9",
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount("#app");
