import AppHelper from "@/helpers/appHelper";
import InterceptorHelper from "@/helpers/intercepterHelper";
import {IPlanData, ISettingsForm} from "./interfaces";
import {ENUM_PLANS_STATUS} from "./enums";

export const apiGetPlans = async (
  page: number,
  limit: number,
  search: string,
  status: ENUM_PLANS_STATUS
) => {
  const data = AppHelper.urlSearchParams({
    page: page,
    length: limit,
    searchableFields: '["plan_name"]',
    "search[value]": search,
    "filters[status]": status ?? ENUM_PLANS_STATUS.ACTIVE,
  });
  return InterceptorHelper.intercept<IResponse<IPlanData[]>>(`/admin/plan-list?${data}`);
};

export const apiCreateAndUpdatePlan = async (data: any) => {
  return InterceptorHelper.intercept("/admin/plan-save", {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const apiUpdateSettings = async (data: ISettingsForm) => {
  return InterceptorHelper.intercept(`/admin/landing-page-setting-save`, {
    method: "POST",
    body: JSON.stringify(data),
  });
};
