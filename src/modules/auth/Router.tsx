import { RouteObject } from "react-router";

import ErrorLayout from "@/layouts/ErrorLayout";

export default [
  {
    path: "/auth",
    errorElement: <ErrorLayout />,
    lazy: () => import("./layout/AuthLayout"),
    children: [
      {
        index: true,
        lazy: () => import("./pages/LoginPage"),
      },
      {
        path: "login",
        lazy: () => import("./pages/LoginPage"),
      },
      {
        path: "register",
        lazy: () => import("./pages/RegisterPage"),
      },
      {
        path: "reset-password",
        lazy: () => import("./pages/ResetPasswordPage"),
      },
      {
        path: "confirm-email",
        lazy: () => import("./pages/ConfirmEmailPage"),
      },
      {
        path: "create-new-password",
        lazy: () => import("./pages/CreateNewPasswordPage"),
      },
    ],
  },
] as RouteObject[];
