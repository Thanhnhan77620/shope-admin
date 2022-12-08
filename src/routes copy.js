
import Index from "~/views/Index.js";
import Profile from "~/views/admin/Profile.js";
import Maps from "~/views/admin/Maps.js";
import { Login, Register } from "~/views/auth";
import { Banner, CreateEditBanner } from "~/views/admin/Banner";
import Icons from "~/views/admin/Icons.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/banner",
    name: "Banners",
    icon: "ni ni-planet text-blue",
    layout: "/admin",
    subSidebars: [
      {
        path: "/",// null or / default top level
        name: "List Banner",
        icon: "ni ni-planet text-blue",
        component: Banner,
      },
      {
        path: "/create",
        name: "Create Banner",
        icon: "ni ni-planet text-blue",
        component: CreateEditBanner,
      },
      {
        path: "/edit",
        name: "Edit Banner",
        icon: "ni ni-planet text-blue",
        component: CreateEditBanner,
      }
    ]
  },
  // {
  //   path: "/create",
  //   name: "Create Banner",
  //   icon: "ni ni-planet text-blue",
  //   component: CreateEditBanner,
  //   layout: "/admin"
  // },
  // {
  //   path: "/edit",
  //   name: "Edit Banner",
  //   icon: "ni ni-planet text-blue",
  //   component: CreateEditBanner,
  //   layout: "/admin"
  // },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Banner,
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
