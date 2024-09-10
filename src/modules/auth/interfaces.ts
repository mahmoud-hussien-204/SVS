export interface ILoginForm {
  email: string;
  password: string;
}

export interface IRegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface IResetPasswordForm {
  email: string;
}

export interface ICreateNewPasswordForm {
  password: string;
  confirmPassword: string;
}
