import {RouteObject} from "react-router";

import dashboardRoutes from "./dashboard/Router";

import buyCoinRoutes from "./buyCoin/Router";

import sendAndReceiveRoutes from "./sendAndReceive/Router";

import myPocketRoutes from "./wallets/Router";

import membershipRoutes from "./membership/Router";

import referralRoutes from "./referral/Router";

import profileRoutes from "./profile/Router";

export default [
  {
    path: "/user",
    children: [
      ...dashboardRoutes,
      ...buyCoinRoutes,
      ...sendAndReceiveRoutes,
      ...myPocketRoutes,
      ...membershipRoutes,
      ...referralRoutes,
      ...profileRoutes,
    ],
  },
] as RouteObject[];
