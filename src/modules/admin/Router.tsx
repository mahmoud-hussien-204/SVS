import {RouteObject} from "react-router";

import dashboardRoutes from "./dashboard/Router";

export default [
  {
    path: "/admin",
    children: [...dashboardRoutes],
  },
] as RouteObject[];
