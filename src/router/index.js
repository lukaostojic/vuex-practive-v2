import Vue from "vue";
import VueRouter from "vue-router";
import SearchRegion from "../views/SearchRegion.vue";
import WorldMap from "../views/WorldMap";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "WorldMap",
    component: WorldMap,
  },
  {
    path: "/search-region",
    name: "SearchRegion",
    component: SearchRegion,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
