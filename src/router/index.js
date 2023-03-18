import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import ProductsView from "../views/ProductsView.vue";
import ProductView from "../views/ProductView.vue";
import Signup from "../views/SignupView.vue";
import store from "@/store";

function authGuard() {
  store.dispatch("login", store.getters.loggedInUser);

  if (!store.getters.isAuthenticated) {
    return { path: "login" };
  }
}

function guestGuard() {
  if (store.getters.isAuthenticated) {
    store.dispatch("login", store.getters.loggedInUser);
    return { path: "products" };
  }
}

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
    beforeEnter: [guestGuard],
  },

  {
    path: "/signup",
    name: "SignupView",
    component: Signup,
    beforeEnter: [guestGuard],
  },
  {
    path: "/products",

    children: [
      {
        path: "",
        name: "ProductsView",
        component: ProductsView,
        beforeEnter: [authGuard],
      },
      {
        path: ":id",
        name: "ProductView",
        component: ProductView,
        beforeEnter: [authGuard],
      },
    ],
  },

  {
    path: "/:catchall(.*)",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
  { path: "/:catchAll(.*)", redirect: "/404" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
