import {RouteObject} from "react-router";

export default [
  {
    path: "/",
    lazy: () => import("./pages/LandingPage"),
  },
] as RouteObject[];
