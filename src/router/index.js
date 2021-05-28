import Vue from "vue";
import VueRouter from "vue-router";
import SelectProfile from "../views/SelectProfile.vue";
import RegisterVisit from "../views/RegisterVisit.vue";
import Favorites from "../views/Favorites.vue";
import Profile from "../views/Profile.vue";
import Successful from "../views/Successful.vue";
import VisitInfo from "../views/VisitInfo.vue"
import VisitResume from "../views/VisitResume.vue"
import VisitType from "../views/VisitType.vue"
import VisitVehicle from "../views/VisitVehicle.vue"
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
    component: RegisterVisit,
  },
  { path: "/favorites", name: "favorites", component: Favorites },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/successful",
    name: "successful",
    component: Successful,
  },
  {
    path: "/visitinfo",
    name: "VisitInfo",
    component: VisitInfo,
  },
  {
    path: "/visitresume",
    name: "VisitInfo",
    component: VisitResume,
  },
  {
    path: "/visittype",
    name: "VisitInfo",
    component: VisitType,
  },
  {
    path: "/visitvehicle",
    name: "VisitInfo",
    component: VisitVehicle,
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
