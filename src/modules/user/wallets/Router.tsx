import {RouteObject} from "react-router";

export default [
  {
    path: "my-wallets",
    lazy: () => import("./pages/MyWalletsPage"),
  },
  {
    path: "my-wallets-swap-history",
    lazy: () => import("./pages/SwapHistoryPage"),
  },
  {
    path: "wallet-logs",
    lazy: () => import("./pages/WalletLogsPage"),
  },
] as RouteObject[];
