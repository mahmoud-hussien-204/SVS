import InterceptorHelper from "@/helpers/intercepterHelper"
import { ENUM_SEND_REQUEST_FORM_TYPE, IRequestCoinData, IRqquestCoinHistory, ISendRequestForm } from "./interfaces"

export const apiGetCoinRequests = async () => {
  return InterceptorHelper.intercept<IRequestCoinData>(`/user/request-coin`)
}

export const apiSendCoinRequest = async (values: ISendRequestForm) => {
  let path = "user/send-coin-request"
  if(values.type == ENUM_SEND_REQUEST_FORM_TYPE.SEND_COIN){
    path = "/user/give-coin"
  }
  // this wallet id does not used in default request
  else delete values.wallet_id

  // this type for select user what do you send because we have 2 options
  delete values.type
  
  return InterceptorHelper.intercept(path, {
    body: JSON.stringify(values),
    method: "POST",
  })
}

export  const apiGetRequestsHistory = async (endpoint: ENUM_SEND_REQUEST_FORM_TYPE , page:number , limit:number , search?:string) => {
  const data = new URLSearchParams();
  data.append("page", page.toString() || "1");
  data.append("length", limit.toString() || "10");
  data.append("search[value]", search || "");
  data.append("searchableFields", '["sender_user_id","receiver_user_id","amount"]');

  return InterceptorHelper.intercept<IResponse<IRqquestCoinHistory[]>>(`/user/${endpoint}?${data.toString()}`)
}