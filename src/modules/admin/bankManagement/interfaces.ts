export interface IBankItem {
  id: number;
  holderName: string;
  bankName: string;
  accountNumber: number;
  status: string;
  created_at: string;
  updated_at: string;
  iban: string;
  country: string;
  swiftCode: string;
  bankAddress: string;
  description: string;
  holderAddress: string;
}

export interface IEditBankForm {
  holderName: string;
  bankName: string;
  accountNumber: number;
  iban: string;
  country: string;
  swiftCode: string;
  bankAddress: string;
  description: string;
  holderAddress: string;
  status: string;
}
