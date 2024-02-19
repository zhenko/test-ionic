import { createRouter, createWebHistory } from "@ionic/vue-router";
import todoPage from "../pages/todoPage.vue";

const routes = [
  {
    path: "/",
    name: "todoPage",
    component: todoPage,
  },
  {
    path: "/item:id",
    component: () => import("@/pages/onePage.vue"),
  },
  {
    path: "/add",
    component: () => import("@/pages/addPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
