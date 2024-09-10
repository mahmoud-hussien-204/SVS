import {EnumUserStatus, EnumBuyCoinStatus, EnumCoinHistoryStatus} from "@/enums";

export const constantStatusColors = {
  [EnumUserStatus.pending]: "border-warning/20 text-warning",
  [EnumUserStatus.active]: "border-success/20 text-success",
  [EnumUserStatus.inactive]: "border-error/20 text-error",
  // [EnumBuyCoinStatus.pending]: "border-warning/20 text-warning",
  [EnumBuyCoinStatus.completed]: "border-success/20 text-success",
  // [EnumBuyCoinStatus.active]: "border-success/20 text-success",
  [EnumBuyCoinStatus.failed]: "border-error/20 text-error",
  [EnumBuyCoinStatus.banned]: "border-error/20 text-error",
  // [EnumBuyCoinStatus.inactive]: "border-error/20 text-error",

  // [EnumCoinHistoryStatus.pending]: "border-warning/20 text-warning",
  [EnumCoinHistoryStatus.accepted]: "border-success/20 text-success",
  [EnumCoinHistoryStatus.rejected]: "border-error/20 text-error",
  // [EnumCoinHistoryStatus.failed]: "border-error/20 text-error",
};

export const constantLanguage = [
  {label: "Select Language", value: "", disabled: true},
  {label: "Arabic", value: "ar"},
  {label: "German", value: "de"},
  {label: "English", value: "en"},
  {label: "Spanish", value: "es"},
  {label: "Estonian", value: "et"},
  {label: "Farsi", value: "fa"},
  {label: "French", value: "fr"},
  {label: "Greece", value: "gr"},
  {label: "Indonesian", value: "id"},
  {label: "Italian", value: "it"},
  {label: "Japanese", value: "ja"},
  {label: "Korean", value: "ko"},
  {label: "Dutch", value: "nl"},
  {label: "Polish", value: "pl"},
  {label: "Portuguese (Brazil)", value: "pt-br"},
  {label: "Portuguese (European)", value: "pt"},
  {label: "Romanian", value: "ro"},
  {label: "Russian", value: "ru"},
  {label: "Thai", value: "th"},
  {label: "Turkish", value: "tr"}, // This is the selected option
  {label: "Chinese (Simplified)", value: "zh-CN"},
  {label: "Chinese (Traditional)", value: "zh-TW"},
];
