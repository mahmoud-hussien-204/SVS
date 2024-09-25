import {RouteObject} from "react-router";

export default [
  {
    path: "settings",
    children: [
      {
        path: "general",
        lazy: () => import("./layout/GeneralLayout"),
        children: [
          {
            path: "",
            index: true,
            lazy: () => import("./pages/general/GeneralPage"),
          },
          {
            path: "email",
            lazy: () => import("./pages/general/GeneralEmailPage"),
          },
          {
            path: "twilio",
            lazy: () => import("./pages/general/GeneralTwilioPage"),
          },
          {
            path: "referral",
            lazy: () => import("./pages/general/GeneralReferralPage"),
          },
          {
            path: "kyc",
            lazy: () => import("./pages/general/GeneralKYCPage"),
          },
        ],
      },
      {
        path: "feature",
        lazy: () => import("./pages/FeaturePage"),
      },
      {
        path: "payment-methods",
        lazy: () => import("./pages/PaymentMethodsPage"),
      },
    ],
  },
] as RouteObject[];
