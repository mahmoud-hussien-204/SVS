import InterceptorHelper from "@/helpers/intercepterHelper";

import {IAddUserForm, IUserData} from "./interfaces";

import {ENUM_USERS_STATUS} from "./enums";
import {ICoinData} from "../coins/interfaces";

export const apiGetUsers = (
  type: ENUM_USERS_STATUS,
  page: number,
  limit: number,
  search: string
) => {
  const data = new URLSearchParams();
  data.append("type", type || ENUM_USERS_STATUS.ACTIVE_USERS);
  data.append("page", page.toString() || "1");
  data.append("length", limit.toString() || "10");
  data.append("search[value]", search || "");
  data.append("searchableFields", '["first_name","last_name","email"]');

  return InterceptorHelper.intercept<IResponse<IUserData[]>>(`/admin/users?${data.toString()}`);
};

export const apiAddUser = (data: IAddUserForm) => {
  return InterceptorHelper.intercept(`/admin/user-add`, {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const apiGetCoinList = (page: number, limit: number, search: string) => {
  const data = new URLSearchParams();
  data.append("page", page.toString() || "1");
  data.append("length", limit.toString() || "10");
  data.append("search[value]", search || "");
  data.append("searchableFields", '["name"]');

  return InterceptorHelper.intercept<IResponse<ICoinData[]>>(`/admin/coin-list?${data.toString()}`);
};

export const apiAdjustCoin = () => {
  return InterceptorHelper.intercept(
    `/admin/adjust-coin-list-with-coin-payment?update=coinPayment`
  );
};

export const apiUpdateUser = (data: IAddUserForm & {id: string}) => {
  return InterceptorHelper.intercept(`/admin/user-profile-update`, {
    method: "POST",
    body: JSON.stringify(data),
  });
};
