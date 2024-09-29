import InterceptorHelper from "@/helpers/intercepterHelper";
import {
  IAddWalletForm,
  IGetRateData,
  ISwapCoinDetails,
  ISwapCoinForm,
  ISwapHistoryData,
  IWalletDepositData,
  IWalletsData,
  IWithdrawForm,
} from "./interfaces";
import AppHelper from "@/helpers/appHelper";

export const apiGetWalletData = async (
  page: number,
  limit: number,
  search?: string,
  filter?: string
) => {
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

  return InterceptorHelper.intercept<IResponse<ISwapHistoryData[]>>(
    `/user/coin-convert-history?${data.toString()}`
  );
};

export const apiCreateWallet = async (values: IAddWalletForm) => {
  return InterceptorHelper.intercept(`/user/Wallet-create`, {
    method: "POST",
    body: JSON.stringify(values),
  });
};

export const apiWithdrawWallet = async (values: IWithdrawForm) => {
  return InterceptorHelper.intercept(`/user/Withdraw/balance`, {
    method: "POST",
    body: JSON.stringify(values),
  });
};

export const apiGetWalletDetailsDeposits = async (walletId: number) => {
  return InterceptorHelper.intercept<IWalletDepositData>(
    `/user/wallet-details-${walletId}?q=deposit`
  );
};

export const apiGetWalletDetailsWithdraw = async (walletId: number) => {
  return InterceptorHelper.intercept<IWalletDepositData>(`/user/wallet-details-${walletId}`);
};

export const apiGetWalletLogs = async (walletId: number, tab: "withdraw" | "deposit") => {
  return InterceptorHelper.intercept<IWalletDepositData>(
    `/user/wallet-details-${walletId}?ac_tab=${tab}`
  );
};

export const apiGetSwapCoinDetails = async (walletId: number) => {
  return InterceptorHelper.intercept<ISwapCoinDetails[]>(`/user/swap-coin-details?id=${walletId}`);
};

export const apiGetRate = async (data: ISwapCoinForm) => {
  const values = AppHelper.urlSearchParams({
    from_coin_id: data.from_coin_id,
    to_coin_id: data.to_coin_id,
    amount: data.amount,
  });

  return InterceptorHelper.intercept<IGetRateData>(`/user/get-rate?${values}`);
};

export const apiSwapCoin = async (data: ISwapCoinForm) => {
  return InterceptorHelper.intercept(`/user/swap-coin`, {
    method: "POST",
    body: JSON.stringify(data),
  });
};
