import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Web Tools",
      },
    },
    {
      path: "/ipaddresscheck",
      name: "ipaddresscheck",
      component: () => import("../views/IpAddressCheck.vue"),
      meta: {
        title: "IP Address Check",
      }
    },
    {
      path: "/magenetextract",
      name: "magenetextract",
      component: () => import("../views/MagenetExtract.vue"),
      meta: {
        title: "Magenet Extract",
      }
    },
    {
      path: "/getlastesttrackerlists",
      name: "getlastesttrackerlists",
      component: () => import("../views/GetLastestTrackerLists.vue"),
      meta: {
        title: "Get Lastest Tracker Lists",
      }
    },
    {
      path: "/ajaxcorstest",
      name: "ajaxcorstest",
      component: () => import("../views/Ajaxcorstest.vue"),
      meta: {
        title: "Ajaxcorstest",
      }
    },
    {
      path: "/:catchAll(.*)",
      name: "404",
      redirect: { name: "home" },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
