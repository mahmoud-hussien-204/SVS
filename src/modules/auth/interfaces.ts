export interface ILoginForm {
  email: string;
  password: string;
}

export interface IRegisterForm {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface IResetPasswordForm {
  email: string;
}

export interface ICreateNewPasswordForm {
  password: string;
  password_confirmation: string;
}
