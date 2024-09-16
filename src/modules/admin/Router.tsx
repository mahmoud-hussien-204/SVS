import {RouteObject} from "react-router";

import dashboardRoutes from "./dashboard/Router";

import usersRoutes from "./users/Router";

import coinsRoutes from "./coins/Router";

export default [
  {
    path: "/admin",
    children: [...dashboardRoutes, ...usersRoutes, ...coinsRoutes],
  },
] as RouteObject[];
