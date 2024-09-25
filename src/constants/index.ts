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

export const baseURL = import.meta.env.VITE_APP_API_URL;

export const constantRoles = [
  {label: "Select Role", value: "", disabled: true},
  {label: "Admin", value: 1},
  {label: "User", value: 2},
];

export const constantGender = [
  {
    label: "Select Gender",
    value: "",
    disabled: true,
  },
  {value: 1, label: "Male"},
  {value: 2, label: "Female"},
];

export const constantCountries = [
  {
    label: "Select Country",
    value: "",
    disabled: true,
  },
  {value: "af", label: "Afghanistan"},
  {value: "al", label: "Albania"},
  {value: "dz", label: "Algeria"},
  {value: "ds", label: "American Samoa"},
  {value: "ad", label: "Andorra"},
  {value: "ao", label: "Angola"},
  {value: "ai", label: "Anguilla"},
  {value: "aq", label: "Antarctica"},
  {value: "ag", label: "Antigua and Barbuda"},
  {value: "ar", label: "Argentina"},
  {value: "am", label: "Armenia"},
  {value: "aw", label: "Aruba"},
  {value: "au", label: "Australia"},
  {value: "at", label: "Austria"},
  {value: "az", label: "Azerbaijan"}, // This one is selected
  {value: "bs", label: "Bahamas"},
  {value: "bh", label: "Bahrain"},
  {value: "bd", label: "Bangladesh"},
  {value: "bb", label: "Barbados"},
  {value: "by", label: "Belarus"},
  {value: "be", label: "Belgium"},
  {value: "bz", label: "Belize"},
  {value: "bj", label: "Benin"},
  {value: "bm", label: "Bermuda"},
];

export const constantEnableAndDisablesOptions = [
  {
    label: "Enabled",
    value: 1,
  },
  {
    label: "Disabled",
    value: 0,
  },
];
