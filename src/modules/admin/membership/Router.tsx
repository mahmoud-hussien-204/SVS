import {RouteObject} from "react-router";

export default [
  {
    path: "membership-plans",
    lazy: () => import("./pages/PlansPage"),
  },
] as RouteObject[];
