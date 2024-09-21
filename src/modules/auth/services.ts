import InterceptorHelper from "@/helpers/intercepterHelper";
import {ILoginForm} from "./interfaces";

export const apiLoginUser = async (values: ILoginForm) => {
  return InterceptorHelper.intercept<IResponse<IUserResponse>>("/login", {
    body: JSON.stringify(values),
    method: "POST",
  });
};
