import InterceptorHelper from "@/helpers/intercepterHelper";

import {IDashboardData} from "./interfaces";

export const apiGetDashboardData = () => {
  return InterceptorHelper.intercept<IDashboardData>("/admin/dashboard");
};
