export interface IEditCoinForm {
  coinName: string;
  withdrawalFees: number;
  minimumWithdrawal: number;
  maximumWithdrawal: number;
  withdrawalStatus: string;
  activeStatus: string;
  coinIcon: string;
}

export interface ICoinData {
  id: number;
  coinName: string;
  coinType: string;
  minWithdrawAmount: number;
  maxWithdrawAmount: number;
  feesPercentage: number;
  status: string;
  updatedAt: string;
}
