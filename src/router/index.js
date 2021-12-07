import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/heroes",
    name: "Heroes",
    // route level code-splitting
    // this generates a separate chunk (heroes.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Heroes" */ "../views/Heroes.vue"),
  },
  {
    path: "/villanos",
    name: "Villains",
    // route level code-splitting
    // this generates a separate chunk (villanos.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Villains" */ "../views/Villains.vue"),
  },
  {
    path: "/neutros",
    name: "Neutrals",
    // route level code-splitting
    // this generates a separate chunk (neutros.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Neutrals" */ "../views/Neutrals.vue"),
  },
  {
    path: "/favoritos",
    name: "Favourites",
    // route level code-splitting
    // this generates a separate chunk (favoritos.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Favourites" */ "../views/Favourites.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
