import {RouteObject} from "react-router";

export default [
  {
    path: "users",
    lazy: () => import("./pages/UsersPage"),
  },
] as RouteObject[];
