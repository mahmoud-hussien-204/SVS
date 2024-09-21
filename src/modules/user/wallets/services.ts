import InterceptorHelper from "@/helpers/intercepterHelper";
import {IAddWalletForm, ISwapHistoryData, IWalletDepositData, IWalletsData, IWithdrawForm} from "./interfaces";

export const apiGetWalletData = async (page: number, limit: number, search?: string , filter?: string) => {
  const data = new URLSearchParams();
  data.append("page", page.toString() || "1");
  data.append("length", limit.toString() || "10");
  data.append("search[value]", search || "");
  data.append("searchableFields", '["name","balance","status","coin_type"]');
  data.append("tab", filter || "");

  return InterceptorHelper.intercept<IWalletsData>(`/user/my-pocket?${data.toString()}`);
};

export const apiGetSwapHistory = async (page: number, limit: number, search?: string) => {
  const data = new URLSearchParams();
  data.append("page", page.toString() || "1");
  data.append("length", limit.toString() || "10");
  data.append("searchableFields", '["from_wallet_id","to_wallet_id","converted_amount"]');
  data.append("search[value]", search || "");

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

export const apiGetWalletDetailsDeposits = async (walletId:number) => {
  return InterceptorHelper.intercept<IWalletDepositData>(`/user/wallet-details-${walletId}?q=deposit`)
}