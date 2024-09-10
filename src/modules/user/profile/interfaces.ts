export interface IProfileGlobalSettings {
  language: string;
}

export interface IUpdatePassword {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface IEnableTwoFactorAuthentication {
  code: string;
}

export interface IEditProfile {
  fullName: string;
  email: string;
  phone: string;
  photo: string;
  country: string;
}

export interface IPhoneVerification {
  code: string;
  phone: string;
}
