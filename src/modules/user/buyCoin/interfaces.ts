import {EnumBuyCoinStatus} from "@/enums";

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
