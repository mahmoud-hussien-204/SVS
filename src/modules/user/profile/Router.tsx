import {RouteObject} from "react-router";

export default [
  {
    path: "profile",
    lazy: () => import("./layout/ProfileLayout"),
    children: [
      {
        path: "",
        lazy: () => import("./pages/GlobalSettingsPage"),
        index: true,
      },
      {
        path: "global-settings",
        lazy: () => import("./pages/GlobalSettingsPage"),
      },
      {
        path: "security",
        lazy: () => import("./pages/SecurityPage"),
      },
      {
        path: "edit-profile",
        lazy: () => import("./pages/EditProfilePage"),
      },
      {
        path: "phone-verification",
        lazy: () => import("./pages/PhoneVerification"),
      },
    ],
  },
] as RouteObject[];
