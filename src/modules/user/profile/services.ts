import InterceptorHelper from "@/helpers/intercepterHelper";

import {
  IEditProfile,
  IPhoneVerification,
  IProfileGlobalSettings,
  IUpdatePassword,
  IUpdatePhotoResponse,
  IUserProfile,
} from "./interfaces";

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
  return InterceptorHelper.intercept<IResponse<IUpdatePhotoResponse>>(
    "/user/upload-profile-image",
    {
      body: values,
      method: "POST",
    }
  );
};

export const apiChnaggePassword = async (values: IUpdatePassword) => {
  return InterceptorHelper.intercept("/user/change-password-save", {
    body: JSON.stringify(values),
    method: "POST",
  });
};

export const apiGetQrCode2FA = async () => {
  return InterceptorHelper.intercept("/user/qrcode/generate");
};

export const apiUploadIdVerification = async (data: FormData) => {
  return InterceptorHelper.intercept("/user/nid-upload", {
    method: "POST",
    body: data,
  });
};

export const apiUploadPassportVerification = async (data: FormData) => {
  return InterceptorHelper.intercept("/user/pass-upload", {
    method: "POST",
    body: data,
  });
};

export const apiUploadDeiverLicense = async (data: FormData) => {
  return InterceptorHelper.intercept("/user/driving-licence-upload", {
    method: "POST",
    body: data,
  });
};

export const apiGetUserProfile = async () => {
  return InterceptorHelper.intercept<IUserProfile>("/user/profile");
};

export const apiVerifyPhone = async (data: IPhoneVerification) => {
  return InterceptorHelper.intercept("/user/phone-verify", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
