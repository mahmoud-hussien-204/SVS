interface IUserResponse {
  access_token: string;
  access_type: string;
  user_info: IUser;
  g2f_verify: boolean;
  email_verified: number;
}

interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  reset_code: null;
  role: IUserRole;
  token: string;
  status: number;
  country_code: string;
  phone: string;
  phone_verified: number;
  country: string;
  gender: number;
  birth_date: string;
  photo: string;
  g2f_enabled: string;
  google2fa_secret: string | null;
  is_verified: number;
  language: string;
  device_id: null;
  device_type: number;
  push_notification_status: number;
  email_notification_status: number;
  created_at: string;
  updated_at: string;
  verification_codes: null;
  email_verified_at: string;
}

type IUserStatus = keyof typeof import("./enums").EnumUserStatus;

type IUserRole = keyof typeof import("./enums").EnumUserRole;

interface ISvgIconProps {
  svgProps?: import("react").SVGProps<SVGSVGElement>;
  pathProps?: import("react").SVGProps<SVGPathElement>;
}

type IModals = keyof typeof import("./enums").EnumModals;

interface IModalComponentProps {
  type: IModals | undefined;
  isOpen: boolean;
  show: (type: IModals, data?: unknown) => void;
  hide: () => void;
  data: unknown;
}

type IPagination = {
  recordsTotal: number;
  recordsFiltered: number;
  draw: string;
};

interface IResponse<T> extends IPagination {
  data: T;
}

interface IError extends Error {
  message: string;
}

type IQueryParams = {
  page?: string | number;
  limit?: string | number;
  search?: string;
};

interface ICoin {
  id: number;
  name: string;
  type: string;
  status: number;
  is_withdrawal: number;
  is_deposit: number;
  is_buy: number;
  is_sell: number;
  withdrawal_fees: string;
  maximum_withdrawal: string;
  minimum_withdrawal: string;
  minimum_sell_amount: string;
  minimum_buy_amount: string;
  sign: null;
  trade_status: number;
  is_virtual_amount: number;
  is_transferable: number;
  is_wallet: number;
  is_primary: null;
  is_currency: number;
  is_base: number;
  coin_icon: null;
  created_at: string;
  updated_at: string;
}
