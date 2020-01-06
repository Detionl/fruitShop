import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home/Home.vue";
import Category from "@/views/Category/Category.vue";
import Cart from "@/views/Cart/Cart.vue";
import Profile from "@/views/Profile/Profile.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/category",
    name: "category",
    component: Category
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/report",
    name: "Report",
    component: () => import( /* webpackChunkName: "about" */ '../views/Home/components/Report.vue')
  },
  {
    path: "/Login",
    name: "login",
    component: () => import( /* webpackChunkName: "about" */ '../views/Login/Login.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;