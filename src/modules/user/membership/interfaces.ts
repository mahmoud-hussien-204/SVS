import {constantTransferCoinMethods} from "./constants";

export interface ITransferCoinForm {
  wallet: string;
  amount: number;
  type: (typeof constantTransferCoinMethods)[number];
}
