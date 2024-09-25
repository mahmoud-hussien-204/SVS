import InterceptorHelper from "@/helpers/intercepterHelper";

export const apiGetBuyCoinOrders = async () => {
  return InterceptorHelper.intercept(`/admin/buy-coin-order`);
};
