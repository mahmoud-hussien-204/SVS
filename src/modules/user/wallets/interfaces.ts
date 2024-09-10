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
