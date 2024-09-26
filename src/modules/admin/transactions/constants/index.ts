import {ENUM_ALL_TRANSACTIONS} from "../enums";

export const constantRequestStatus = [
  {
    label: "Request Status",
    value: "",
    disabled: true,
  },
  {
    label: "Accepted",
    value: "Accepted",
  },
  {
    label: "Rejected",
    value: "Rejected",
  },
];

export const constantAllTransactions = [
  {
    label: "Deposits",
    value: ENUM_ALL_TRANSACTIONS.DEPOSITS,
  },
  {
    label: "Withdrawal",
    value: ENUM_ALL_TRANSACTIONS.WITHDRAWAL,
  },
];
