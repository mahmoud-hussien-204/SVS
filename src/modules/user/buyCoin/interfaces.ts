import {EnumBuyCoinStatus} from "@/enums";

import {ENUM_BUY_COIN_PAYMENT_TYPE} from "./enums";

export interface IBuyCoinForm {
  payment_type: ENUM_BUY_COIN_PAYMENT_TYPE | string;
  payment_coin_type?: string;
  coin: number;
  bank_id?: string;
  sleep?: string;
  token?: string;
}

export interface IBuyCoinData {
  id: number;
  address: string;
  type: string;
  user_id: number;
  coin: string;
  btc: string;
  doller: string;
  transaction_id: null;
  status: EnumBuyCoinStatus;
  admin_confirmation: number;
  confirmations: number;
  bank_sleep: null;
  bank_id: null;
  coin_type: string;
  requested_amount: string;
  referral_bonus: string;
  bonus: string;
  fees: string;
  referral_level: number;
  phase_id: number;
  stripe_token: null;
  created_at: string;
  updated_at: string;
  deposit_status: string;
}

export interface IReferralData {
  id: number;
  user_id: number;
  wallet_id: string;
  buy_id: number;
  phase_id: number;
  child_id: number;
  level: number;
  system_fees: string;
  amount: string;
  status: number;
  created_at: string;
  updated_at: string;
  wallet: IWallet;
  deposit_status: string;
  coin_type: string;
}

interface IWallet {
  id: number;
  user_id: number;
  name: string;
  coin_type: string;
  coin_id: number;
  status: number;
  is_primary: number;
  balance: string;
  referral_balance: string;
  created_at: string;
  updated_at: string;
  key: null;
  type: number;
}

export interface IBuyCoinPageData {
  title: string;
  settings: IBuyCoinSettings;
  banks: IBank[];
  coins: ICoin[];
  coin_price: string;
  btc_dlr: string;
  no_phase: boolean;
  STRIPE_KEY: string;
}

export interface IBuyCoinSettings {
  coin_price: string;
  coin_name: string;
  app_title: string;
  maximum_withdrawal_daily: string;
  mail_from: string;
  admin_coin_address: string;
  base_coin_type: string;
  minimum_withdrawal_amount: string;
  maximum_withdrawal_amount: string;
  maintenance_mode: string;
  logo: string;
  login_logo: string;
  landing_logo: string;
  favicon: string;
  copyright_text: string;
  pagination_count: string;
  point_rate: string;
  lang: string;
  company_name: string;
  primary_email: string;
  sms_getway_name: string;
  twillo_secret_key: string;
  twillo_auth_token: string;
  twillo_number: string;
  ssl_verify: string;
  mail_driver: string;
  mail_host: string;
  mail_port: string;
  mail_username: string;
  mail_password: string;
  mail_encryption: string;
  mail_from_address: string;
  braintree_client_token: string;
  braintree_environment: string;
  braintree_merchant_id: string;
  braintree_public_key: string;
  braintree_private_key: string;
  clickatell_api_key: string;
  number_of_confirmation: string;
  referral_commission_percentage: string;
  referral_signup_reward: string;
  max_affiliation_level: string;
  coin_api_user: string;
  coin_api_pass: string;
  coin_api_host: string;
  coin_api_port: string;
  send_fees_type: string;
  send_fees_fixed: string;
  send_fees_percentage: string;
  max_send_limit: string;
  deposit_time: string;
  COIN_PAYMENT_PUBLIC_KEY: string;
  COIN_PAYMENT_PRIVATE_KEY: string;
  COIN_PAYMENT_CURRENCY: string;
  ipn_merchant_id: string;
  ipn_secret: string;
  payment_method_coin_payment: string;
  payment_method_bank_deposit: string;
  membership_bonus_type: string;
  membership_bonus_fixed: string;
  membership_bonus_percentage: string;
  chain_link: string;
  contract_address: string;
  wallet_address: string;
  private_key: string;
  contract_decimal: string;
  gas_limit: string;
  contract_coin_name: string;
  kyc_enable_for_withdrawal: string;
  kyc_nid_enable_for_withdrawal: string;
  kyc_passport_enable_for_withdrawal: string;
  kyc_driving_enable_for_withdrawal: string;
  plan_minimum_amount: string;
  plan_maximum_amount: string;
}

export interface IBuyCoinRateResponse {
  amount: number;
  coin_type: string;
  phase_fees: number;
  bonus: number;
  no_phase: boolean;
  coin_price: string;
  btc_dlr: string;
}
