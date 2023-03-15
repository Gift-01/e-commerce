import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import ProductsView from "../views/ProductsView.vue";
import ProductView from "../views/ProductView.vue";
import Signup from "../views/SignupView.vue";
import store from "@/store";

function authGuard() {
  if (!store.getters.isAuthenticated) {
    return { path: "login" };
  }
}

function guestGuard() {
  if (store.getters.isAuthenticated) {
    return { path: "product" };
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
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/:catchall(.*)",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
