import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import mainNav from "../views/mainNav.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: Login,
    name: "Login",
  },
  {
    path: "/",
    component: mainNav,
    name: "mainNav",
    redirect: "/home",
    children: [
      { path: "/home", component: Home, name: "Home" },
      {
        path: "/modules",
        name: "ElementsIndex",
        component: () => import("../views/modules/ElementsIndex.vue"),
      },
      {
        path: "/yz",
        name: "Yanzhen",
        component: () => import("../views/Yanzhen.vue"),
      },
      {
        path: "/detail",
        name: "Blog",
        component: () => import("../views/Blog.vue"),
      },
      {
        path: '/detail/:id',
        component: () => import("../views/Blog.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/ty",
    name: "TinyMCE",
    component: () => import("../views/TinyMCE.vue"),
  },
  {
    path: "/edit",
    name: "articleEdit",
    component: () => import("../views/admin/articleEdit.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
