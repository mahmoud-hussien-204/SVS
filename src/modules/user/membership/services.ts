import InterceptorHelper from "@/helpers/intercepterHelper";
import { IMembershipData, IMembershipHistroy, ITransferCoinForm } from "./interfaces";

export const apiGetMemberShipPlans = async () => {

  return InterceptorHelper.intercept<IMembershipData>(`/user/membership-club-plans`);
};

export const apiGetMemberShipHistory = async () => {
  return InterceptorHelper.intercept<IMembershipHistroy>(`/user/my-membership`);
}

export const apiGetMemberShipWallets = async () => {
  return InterceptorHelper.intercept(`/user/request-coin`);
}

export const apiTransferCoin = async (values: ITransferCoinForm) => {
  let path = "/user/transfer-coin-to-wallet";
  if(values.type == "from-wallet-to-club"){
    path = "/user/transfer-coin-to-club";
  }

  return InterceptorHelper.intercept(path, {
    body: JSON.stringify({amount: values.amount , wallet_id: values.wallet_id}),
    method: "POST",
  });
}