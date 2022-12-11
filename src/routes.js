
import Index from "~/views/Index.js";
import Profile from "~/views/admin/Profile.js";
import Maps from "~/views/admin/Maps.js";
import { Login, Register } from "~/views/auth";
import { Banner, CreateBanner, CreateEditBanner, EditBanner } from "~/views/admin/Banner";
import Icons from "~/views/admin/Icons.js";

var routes = [
  //index
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
    sideBar: true
  },

  //user
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },

  // banner
  {
    path: "/banners",
    name: "Banners",
    icon: "ni ni-bullet-list-67 text-red",
    component: Banner,
    layout: "/admin",
    sideBar: true
  },
  {
    path: "/banner/create",
    name: "Create Banner",
    icon: "ni ni-bullet-list-67 text-red",
    component: CreateBanner,
    layout: "/admin"
  },
  {
    path: "/banner/edit/:id",
    name: "Edit Banner",
    icon: "ni ni-bullet-list-67 text-red",
    component: EditBanner,
    layout: "/admin",
  },

  //login
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },

  //logout
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  }
];
export default routes;
