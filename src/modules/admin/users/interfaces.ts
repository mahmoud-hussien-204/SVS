export interface IAddUserForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: string;
}

export type IEditUserForm = IAddUserForm;

export interface IUserData {
  id: number;
  userName: string;
  email: string;
  role: string;
  status: IUserStatus;
  createdAt: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
}
