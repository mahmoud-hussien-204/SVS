import {constantTransferCoinMethods} from "./constants";

export interface ITransferCoinForm {
  wallet_id: string;
  amount: number;
  type: (typeof constantTransferCoinMethods)[number];
}

export interface IMembershipData {
  success: boolean;
  title: string;
  plans: IPlan[];
  wallets: IWallet[];
  small_plan: IPlan | object;
}

export interface IWallet {
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

export interface IPlan {
  id: number;
  plan_name: string;
  duration: number;
  amount: string;
  image: string;
  bonus_type: number;
  bonus: string;
  bonus_coin_type: string;
  status: number;
  description: null;
  created_at: string;
  updated_at: string;
}

export interface IMembershipHistroy {
  success: boolean;
  title: string;
  data: IUserMyMemberShipPlanData;
  MembershipBonusDistributionHistory: IResponse<IMembershipHistoryData[]>;
}

export interface IMembershipHistoryData {
  id: number;
  user_id: number;
  plan_id: string;
  wallet_id: string;
  membership_id: number;
  distribution_date: string;
  bonus_amount: string;
  plan_current_bonus: string;
  bonus_type: number;
  bonus_amount_btc: string;
  bonus_coin_type: string;
  status: string;
  created_at: string;
  updated_at: string;
  email: string;
  plan: IPlan;
  wallet: IWallet;
}

export interface IUserMyMemberShipPlanData {
  id: number;
  user_id: number;
  plan_id: number;
  wallet_id: number;
  amount: string;
  start_date: string;
  end_date: string;
  status: number;
  created_at: string;
  updated_at: string;
  plan_bonus: number;
  plan: IPlan;
}
