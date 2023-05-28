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
  // Partners
  {
    // show different routes after authenticating partners like /partners/orders instead of /orders
    // you can have nested routes
    path: "/partners",
    name: "partners",
    component: () => import("pages/Partner/Index.vue"),
    children: [
      // paths that start with / will be treated as root paths. This allows you to leverage the component nesting without having to use a nested URL.
      {
        path: "",
        name: "auth",
        component: () => import("pages/Partner/Auth.vue"),
      },
      {
        path: "ordering",
        name: "Partner_Ordering",
        component: () => import("pages/Partner/Ordering.vue"),
      },
      {
        path: "history",
        name: "Partner_History",
        component: () => import("pages/Partner/History.vue"),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
