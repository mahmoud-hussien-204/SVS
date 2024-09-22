import { ENUM_SEND_REQUEST_FORM_TYPE } from "../interfaces";


export const constantRequestCoinTaps = [
  {
    label: "Send History For Default Coin",
    value: "give-coin-history",
  },
  {
    label: "Receive History For Default Coin",
    value: "received-coin-history",
  },
  {
    label: "Pending Request For Default Coin",
    value: "pending-request",
  },
];

export const constantRequestCoinStatus = [
  {
    label: "Request Status",
    value: "",
    disabled: true,
  },
  {
    label: "Sent",
    value: "sent",
  },
  {
    label: "Received",
    value: "received",
  },
  {
    label: "Pending",
    value: "pending",
  },
];


export const constantRequestCoinType = [
  {
    label: "Select Request Type",
    value: "",
    disabled: true,
  },
  {
    label: "Default Coin Request",
    value: ENUM_SEND_REQUEST_FORM_TYPE.DEFAULT,
  },
  {
    label: "Send Coin",
    value: ENUM_SEND_REQUEST_FORM_TYPE.SEND_COIN,
  },
];