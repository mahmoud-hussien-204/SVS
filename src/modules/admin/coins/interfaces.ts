export interface IEditCoinForm {
  name: string;
  fee: string;
  minimum_withdrawal: string;
  maximum_withdrawal: string;
  status: string;
  activeStatus: string;
  coinIcon: string;
}

export interface ICoinData {
  id: number;
  name: string;
  status: string;
  type: string;
  minimum_withdrawal: string;
  maximum_withdrawal: string;
  fee: string;
  updated_at: string;
}
