import InterceptorHelper from "@/helpers/intercepterHelper";
import {ISwapHistoryData} from "./interfaces";

export const apiGetWalletData = async (page: number, limit: number, search?: string) => {
  const data = new URLSearchParams();
  data.append("page", page.toString() || "1");
  data.append("length", limit.toString() || "10");
  data.append("search", search || "");

  return InterceptorHelper.intercept<ISwapHistoryData[]>(`/user/my-pocket?${data.toString()}`);
};

export const apiGetSwapHistory = async (page: number, limit: number, search?: string) => {
  const data = new URLSearchParams();
  data.append("page", page.toString() || "1");
  data.append("length", limit.toString() || "10");
  data.append("search", search || "");

  return InterceptorHelper.intercept<ISwapHistoryData[]>(
    `/user/coin-convert-history?${data.toString()}`
  );
};
