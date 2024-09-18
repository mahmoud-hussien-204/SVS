import {RouteObject} from "react-router";

export default [
  {
    path: "orders",
    lazy: () => import("./pages/BuyCoinOrdersPage"),
  },
] as RouteObject[];
