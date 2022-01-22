
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
  },{
    path: "/admin",
    name: "admin_page",
    component: () => import("@/pages/Admin.vue"),
    meta: { title: "Admin" },
  },{
    path: "/admin/user",
    name: "user",
    component: () => import("@/pages/Admin/user.vue"),
    meta: { title: "Admin_user" },
  },{
    path: "/admin/product",
    name: "product",
    component: () => import("@/pages/Admin/product.vue"),
    meta: { title: "Admin_product" },
  },{
    path: "/admin/article",
    name: "article",
    component: () => import("@/pages/Admin/article.vue"),
    meta: { title: "Admin_article" },
  },{
    path: "/admin/order",
    name: "order",
    component: () => import("@/pages/Admin/order.vue"),
    meta: { title: "Admin_order" },
  },{
    path: "/admin/account",
    name: "account",
    component: () => import("@/pages/Admin/account.vue"),
    meta: { title: "Admin_account" },
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
