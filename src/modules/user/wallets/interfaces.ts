export interface IAddWalletForm {
  walletType: string;
  walletName: string;
  coinType: string;
}

export interface IWithdrawForm {
  walletAddress: string;
  amount: number;
  comment?: string;
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
