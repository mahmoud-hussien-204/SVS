import InterceptorHelper from "@/helpers/intercepterHelper";

import {IEditProfile, IProfileGlobalSettings} from "./interfaces";

export const apiUpdateProfileGlobalSettings = async (values: IProfileGlobalSettings) => {
  return InterceptorHelper.intercept<IUserResponse>("/user/save-preference", {
    body: JSON.stringify(values),
    method: "POST",
  });
};

export const apiUpdateUserProfile = async (values: IEditProfile) => {
  return InterceptorHelper.intercept("/user/user-profile-update", {
    body: JSON.stringify(values),
    method: "POST",
  });
};

export const apiUploadProfilePhoto = async (values: FormData) => {
  return InterceptorHelper.intercept("/user/upload-profile-image", {
    body: values,
    method: "POST",
  });
};
