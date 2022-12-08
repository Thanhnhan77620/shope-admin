
import Index from "~/views/Index.js";
import Profile from "~/views/admin/Profile.js";
import Maps from "~/views/admin/Maps.js";
import { Login, Register } from "~/views/auth";
import { Banner, CreateBanner, CreateEditBanner, EditBanner } from "~/views/admin/Banner";
import Icons from "~/views/admin/Icons.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  // {
  //   path: "/banner",
  //   name: "Banners",
  //   icon: "ni ni-planet text-blue",
  //   layout: "/admin",
  //   subSidebars: [
  //     {
  //       path: "/",
  //       name: "List Banner",
  //       icon: "ni ni-planet text-blue",
  //       component: Banner,
  //     },
  //     {
  //       path: "/create",
  //       name: "Create Banner",
  //       icon: "ni ni-planet text-blue",
  //       component: CreateEditBanner,
  //     },
  //     {
  //       path: "/edit",
  //       name: "Edit Banner",
  //       icon: "ni ni-planet text-blue",
  //       component: CreateEditBanner,
  //     }
  //   ]
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin"
  // },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/banners",
    name: "Banners",
    icon: "ni ni-bullet-list-67 text-red",
    component: Banner,
    layout: "/admin"
  },
  {
    path: "/banner/create",
    name: "Create Banner",
    icon: "ni ni-bullet-list-67 text-red",
    component: CreateBanner,
    layout: "/admin"
  },
  {
    path: "/banner/edit/98",
    name: "Edit Banner",
    icon: "ni ni-bullet-list-67 text-red",
    component: CreateBanner,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  }
];
export default routes;
