import InterceptorHelper from "@/helpers/intercepterHelper";
import {IAddWalletForm, ISwapHistoryData, IWalletsData, IWithdrawForm} from "./interfaces";

export const apiGetWalletData = async (search?: string) => {
  const data = new URLSearchParams();
  data.append("search", search || "");
  return InterceptorHelper.intercept<IWalletsData>(`/user/my-pocket?${data.toString()}`);
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

export const apiCreateWallet = async (values: IAddWalletForm) => {
  return InterceptorHelper.intercept(`/user/Wallet-create`, {
    method: "POST",
    body: JSON.stringify(values),
  });
}

export const apiWithdrawWallet = async (values: IWithdrawForm) => {
  return InterceptorHelper.intercept(`/user/Withdraw/balance`, {
    method: "POST",
    body: JSON.stringify(values),
  });
}