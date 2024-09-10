import {RouteObject} from "react-router";

export default [
  {
    path: "request-coin",
    lazy: () => import("./pages/RequestCoinPage"),
  },
] as RouteObject[];
