import InterceptorHelper from "@/helpers/interceptorHelper";

import {
  ENUM_SEND_REQUEST_FORM_TYPE,
  IRequestCoinData,
  IRqquestCoinHistory,
  ISendRequestForm,
} from "./interfaces";
import AppHelper from "@/helpers/appHelper";

export const apiGetCoinRequests = async () => {
  return InterceptorHelper.intercept<IRequestCoinData>(`/user/request-coin`);
};

export const apiSendCoinRequest = async (values: ISendRequestForm) => {
  let path = "/user/send-coin-request";
  if (values.type == ENUM_SEND_REQUEST_FORM_TYPE.SEND_COIN) {
    path = "/user/give-coin";
  }
  // this wallet id does not used in default request
  else delete values.wallet_id;

  // this type for select user what do you send because we have 2 options
  delete values.type;

  return InterceptorHelper.intercept(path, {
    body: JSON.stringify(values),
    method: "POST",
  });
};

export const apiGetRequestsHistory = async (
  endpoint: ENUM_SEND_REQUEST_FORM_TYPE,
  page: number,
  limit: number,
  search?: string
) => {
  const data = AppHelper.urlSearchParams({
    page,
    length: limit,
    searchableFields: '["sender_user_id","receiver_user_id","amount"]',
    "search[value]": search,
  });

  return InterceptorHelper.intercept<IResponse<IRqquestCoinHistory[]>>(`/user/${endpoint}?${data}`);
};
