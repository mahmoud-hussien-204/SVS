export interface IAddUserForm {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  role: number;
}

export interface IUserData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  reset_code: null;
  role: number;
  status: string;
  country_code: null;
  phone: null;
  phone_verified: number;
  country: null;
  gender: number;
  birth_date: null;
  photo: null;
  g2f_enabled: string;
  google2fa_secret: null;
  is_verified: number;
  language: string;
  device_id: null;
  device_type: number;
  push_notification_status: number;
  email_notification_status: number;
  created_at: string;
  updated_at: string;
  verification_codes: null;
  type: string;
  action: IUserActions;
}

export interface IUserActions {
  View: string;
  Edit: string;
  Suspend: string;
  Delete: string;
  Email_verify: string;
  Phone_verify: string;
  Active: string;
}
