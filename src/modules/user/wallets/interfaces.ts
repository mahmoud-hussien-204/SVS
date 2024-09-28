export interface IAddWalletForm {
  type: string;
  wallet_name: string;
  coin_type: string;
}

export interface IWithdrawForm {
  address: string;
  amount: number;
  message?: string;
  wallet_id: number;
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
  title: string;
  tab: null;
  coins: ICoin[];
  data: {
    wallets: IWallet[];
  };
  recordsTotal: number;
  recordsFiltered: number;
  draw: null;
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

export interface IWalletDepositData {
  wallet_id: string;
  wallet: IWallet;
  tempWithdraws: any[];
  histories: IHistory[];
  withdraws: any[];
  active: string;
  ac_tab: string;
  title: string;
  address: string;
  "2fa_enabled": boolean;
}

export interface IHistory {
  id: number;
  address: string;
  fees: string;
  sender_wallet_id: number;
  receiver_wallet_id: number;
  address_type: string;
  type: string;
  amount: string;
  btc: string;
  doller: string;
  transaction_id: string;
  status: string;
  updated_by: null;
  from_address: null | string;
  confirmations: number;
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
  coin_status: number;
  is_withdrawal: number;
  minimum_withdrawal: string;
  maximum_withdrawal: string;
  withdrawal_fees: string;
}

// export interface IWalletDepositData {
//   histories: [];
//   address: string;
//   wallet_id: string;
//   wallet: IWallet;
//   tempWithdraws: [];
//   active: boolean;
//   ac_tab: string;
//   title: string;
//   "2fa_enabled": boolean;
// }
