import InterceptorHelper from "@/helpers/intercepterHelper";

import {IBuyCoinData, IReferralData} from "./interfaces";

export const apiGetButyCoinHistory = async (page: number, limit: number, search?: string) => {
  const data = new URLSearchParams();
  data.append("page", page.toString() || "1");
  data.append("length", limit.toString() || "10");
  data.append("search", search || "");

  return InterceptorHelper.intercept<IResponse<IBuyCoinData[]>>(`/user/buy-coin-history?${data.toString()}`);
};

export const apiGetBuyCoinReferralHistory = async (
  page: number,
  limit: number,
  search?: string
) => {
  const data = new URLSearchParams();
  data.append("page", page.toString() || "1");
  data.append("length", limit.toString() || "10");
  data.append("search", search || "");

  return InterceptorHelper.intercept<IResponse<IReferralData[]>>(
    `/user/buy-coin-referral-history?${data.toString()}`
  );
};
