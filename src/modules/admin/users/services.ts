import InterceptorHelper from "@/helpers/intercepterHelper";

import {IUserData} from "./interfaces";

import {ENUM_USERS_STATUS} from "./enums";

export const apiGetUsers = (type: ENUM_USERS_STATUS) => {
  const data = new URLSearchParams();
  data.append("type", type || ENUM_USERS_STATUS.ACTIVE_USERS);
  return InterceptorHelper.intercept<IResponse<IUserData[]>>(`/admin/users?${data.toString()}`);
};
