export interface IBankItem {
  id: number;
  account_holder_name: string;
  account_holder_address: string;
  bank_name: string;
  bank_address: string;
  country: string;
  swift_code: string;
  iban: string;
  note: string;
  status: string;
  created_at: string;
  updated_at: string;
  action: Action;
}

export interface Action {
  Edit: string;
  Delete: string;
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
