import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "main",
    component: () => import("pages/Main.vue"),
  },
  {
    path: "/poem/:id",
    name: "poem",
    component: () => import("pages/Poem.vue"),
  },
  {
    path: "/poet/:id",
    name: "poet",
    component: () => import("pages/Poet.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("pages/About.vue"),
  },
  // Guests
  {
    path: "/ordering",
    name: "Guest_Ordering",
    component: () => import("pages/Guest/Ordering.vue"),
  },
  {
    path: "/history",
    name: "Guest_History",
    component: () => import("pages/Guest/History.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
