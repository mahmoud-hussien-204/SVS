import {RouteObject} from "react-router";

export default [
  {
    path: "transactions-withdrawals",
    lazy: () => import("./pages/WithdrawalsRequests"),
  },
  {
    path: "transactions-deposit",
    lazy: () => import("./pages/DepositsRequests"),
  },
] as RouteObject[];
