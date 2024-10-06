import InterceptorHelper from "@/helpers/interceptorHelper";

import {IBuyCoinData, IBuyCoinPageData, IReferralData, IBuyCoinRateResponse} from "./interfaces";

export const apiGetBuyCoin = async () => {
  return InterceptorHelper.intercept<IBuyCoinPageData>("/user/buy-coin");
};

export const apiGetButyCoinHistory = async (page: number, limit: number, search?: string) => {
  const data = new URLSearchParams();
  data.append("page", page.toString() || "1");
  data.append("length", limit.toString() || "10");
  data.append("search[value]", search || "");
  data.append("searchableFields", '["coin","type","coin","status"]');

  return InterceptorHelper.intercept<IResponse<IBuyCoinData[]>>(
    `/user/buy-coin-history?${data.toString()}`
  );
};

export const apiGetBuyCoinReferralHistory = async (
  page: number,
  limit: number,
  search?: string
) => {
  const data = new URLSearchParams();
  data.append("page", page.toString() || "1");
  data.append("length", limit.toString() || "10");
  data.append("searchableFields", '["name","status","type"]');
  data.append("search[value]", search || "");

  return InterceptorHelper.intercept<IResponse<IReferralData[]>>(
    `/user/buy-coin-referral-history?${data.toString()}`
  );
};

export const apiPostBuyCoinRate = (data: FormData) =>
  InterceptorHelper.intercept<IBuyCoinRateResponse>(`/user/buy-coin-rate`, {
    method: "POST",
    body: data,
  });

export const apiPostBuyCoin = (data: FormData) =>
  InterceptorHelper.intercept<IBuyCoinRateResponse>(`/user/buy-coin`, {
    method: "POST",
    body: data,
  });
