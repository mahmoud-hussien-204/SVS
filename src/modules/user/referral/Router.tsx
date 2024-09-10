import {RouteObject} from "react-router";

export default [
  {
    path: "referral",
    lazy: () => import("./pages/ReferralPage"),
  },
] as RouteObject[];
