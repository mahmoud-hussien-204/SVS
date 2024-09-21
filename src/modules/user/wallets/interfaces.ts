export interface IAddWalletForm {
  type: string;
  wallet_name: string;
  coin_type: string;
}

export interface IWithdrawForm {
  address: string;
  amount: number;
  message?: string;
  wallet_id?: number;
  code?: string;
}

export interface ISwapHistoryData {
  id: number;
  user_id: number;
  from_wallet_id: string;
  to_wallet_id: string;
  from_coin_type: string;
  to_coin_type: string;
  requested_amount: string;
  converted_amount: string;
  rate: string;
  status: number;
  created_at: string;
  updated_at: string;
}


export interface IWalletsData {
  tab: null;
  wallets: IWallet[];
  coWallets: IWallet[];
  coins: ICoin[];
  title: string;
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