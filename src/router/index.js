import Vue from "vue";
import VueRouter from "vue-router";
import SelectProfile from "../views/SelectProfile.vue";
import RegisterVisit from "../views/RegisterVisit.vue";
import Favorites from "../views/Favorites.vue";
import Profile from "../views/Profile.vue";
import NewVisitOwner from "../components/NewVisitOwner.vue"
import HasCode from "../components/HasCode.vue"
import NoCode from "../components/NoCode.vue"
import SuccessOwner from "../views/SuccessOwner.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "select",
    component: SelectProfile,
  },
  {
    path: "/registerowner",
    name: "RegisterOwner",
    props:{
      button1: "Favoritos",
      button2: "Nuevo visitante"
    },
    component: RegisterVisit,
  },
  {
    path: "/registervigilant",
    name: "RegisterVigilant",
    props:{
      button1: "Con codigo",
      button2: "Sin codigo"
    },
    component: RegisterVisit,
  },
  { path: "/favorites", name: "favorites", component: Favorites },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/newVisitOwner",
    name: "NewVisitOwner",
    component: NewVisitOwner,
  },
  {
    path: "/hascode",
    name: "HasCode",
    component: HasCode,
  },
  {
    path: "/nocode",
    name: "NoCode",
    component: NoCode,
  },
  {
    path: "/success",
    name: "Success",
    component: SuccessOwner,
  },
  
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
