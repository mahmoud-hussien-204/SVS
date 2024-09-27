export interface IProfileGlobalSettings {
  lang: string;
}

export interface IUpdatePassword {
  password: string;
  new_password: string;
  confirm_new_password?: string;
}

export interface IEnableTwoFactorAuthentication {
  code: string;
}

export interface IEditProfile {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  gender: number;
}

export interface IPhoneVerification {
  code: string;
  phone: string;
}

export interface IIdVerificationForm {
  file_two: File | string;
  file_three: File | string;
}

export interface IUpdatePhotoResponse {
  image: string;
}

export interface IUserProfile {
  title: string;
  user: IUser;
  clubInfos: IClubInfos;
  nid_front: IImageData;
  nid_back: IImageData;
  pass_front: IImageData;
  pass_back: IImageData;
  drive_front: IImageData;
  drive_back: IImageData;
  qr: string;
}

export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  reset_code: string;
  role: number;
  status: number;
  country_code: string;
  phone: string;
  phone_verified: number;
  country: string;
  gender: number;
  birth_date: string;
  photo: string;
  g2f_enabled: string;
  google2fa_secret: string;
  is_verified: number;
  language: string;
  device_id: string;
  device_type: number;
  push_notification_status: number;
  email_notification_status: number;
  created_at: string;
  updated_at: string;
  verification_codes: string;
}

export interface IClubInfos {
  club_id: number;
  plan_id: number;
  blocked_coin: string;
  plan_name: string;
  plan_image: string;
}

export interface IImageData {
  id: number;
  user_id: number;
  field_name: string;
  status: number;
  photo: string;
  created_at: string;
  updated_at: string;
}
