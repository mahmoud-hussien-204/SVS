import {RouteObject} from "react-router";

export default [
  {
    path: "buy-coin",
    lazy: () => import("./pages/BuyCoinPage"),
  },
  {
    path: "buy-coin-history",
    lazy: () => import("./pages/HistoryPage"),
  },
  {
    path: "buy-coin-referral-history",
    lazy: () => import("./pages/ReferralHistoryPage"),
  },
] as RouteObject[];
