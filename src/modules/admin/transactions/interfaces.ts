export interface IWithdrawalRequest {
  id: number;
  type: string;
  sender: string;
  coinType: string;
  address: string;
  receiver: string;
  amount: number;
  fees: number;
  transactionId: string;
  updateDate: string;
  status: string;
}
