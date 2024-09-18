import {RouteObject} from "react-router";

import dashboardRoutes from "./dashboard/Router";

import usersRoutes from "./users/Router";

import coinsRoutes from "./coins/Router";

import buyCoinOrdersRoutes from "./buyCoinOrders/Router";

import walletsRoutes from "./wallets/Router";

export default [
  {
    path: "/admin",
    children: [
      ...dashboardRoutes,
      ...usersRoutes,
      ...coinsRoutes,
      ...buyCoinOrdersRoutes,
      ...walletsRoutes,
    ],
  },
] as RouteObject[];
