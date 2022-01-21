import Vue from "vue";
import VueRouter from "vue-router";

const DEFAULT_TITLE = "Some Default Title";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home_page",
    component: () => import("@/pages/Home.vue"),
    meta: { title: "Home" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to) => {
  // from
  document.title = to.meta.title || DEFAULT_TITLE;
});

export default router;
