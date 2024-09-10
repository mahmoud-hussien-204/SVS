import {RouteObject} from "react-router";

export default [
  {
    path: "membership-plans",
    lazy: () => import("./pages/PlansPage"),
  },
  {
    path: "membership-history",
    lazy: () => import("./pages/MemberShipHistoryPage"),
  },
] as RouteObject[];
