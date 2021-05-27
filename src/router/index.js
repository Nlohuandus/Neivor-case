import Vue from "vue";
import VueRouter from "vue-router";
import SelectProfile from "../views/SelectProfile.vue";
import RegisterVisit from "../views/RegisterVisit.vue";
import Favorites from "../views/Favorites.vue";
import Profile from "../views/Profile.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "select",
    component: SelectProfile,
  },
  {
    path: "/register",
    name: "RegisterVisit",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: RegisterVisit,
  },
  { path: "/favorites", name: "favorites", component: Favorites },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
