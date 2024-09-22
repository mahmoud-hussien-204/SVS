import { IWallet } from "../wallets/interfaces";


export enum ENUM_SEND_REQUEST_FORM_TYPE {
  DEFAULT = "default_coin_request",
  SEND_COIN = "send_coin",
}

export interface ISendRequestForm {
  wallet_id?: string;
  amount: number;
  email: string;
  type?: ENUM_SEND_REQUEST_FORM_TYPE | string;
}

export interface IRequestCoinData {
  wallets: IWallet[];
  coin: ICoin;
  qr: string;
}

export interface ICoin {
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

export interface IRqquestCoinHistory {
  id: number;
  amount: string;
  sender_user_id: number;
  receiver_user_id: string;
  sender_wallet_id: number;
  receiver_wallet_id: number;
  status: string;
  created_at: string;
  updated_at: string;
  deposit_status: string;
  coin_type: string;
  receiver: IReceiver;
}

export interface IReceiver {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  reset_code: null;
  role: number;
  status: number;
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
}