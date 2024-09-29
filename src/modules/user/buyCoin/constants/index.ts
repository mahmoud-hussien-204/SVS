import {ENUM_BUY_COIN_PAYMENT_TYPE} from "../enums";

export const constantBuyCoinPaymentType = [
  {
    label: "Select Payment Type",
    value: "",
    disabled: true,
  },
  {
    label: "Coin Payment",
    value: ENUM_BUY_COIN_PAYMENT_TYPE.COIN_PAYMENT,
  },
  {
    label: "Bank Deposit",
    value: ENUM_BUY_COIN_PAYMENT_TYPE.BANK_DEPOSIT,
  },
  {
    label: "Credit Card",
    value: ENUM_BUY_COIN_PAYMENT_TYPE.CREDIT_CARD,
  },
];
