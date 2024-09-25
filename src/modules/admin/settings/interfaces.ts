export interface IGeneralSettingsForm {
  language: string;
  companyName: string;
  baseCoinType: string;
  copyRightText: string;
  numberOfConfirmation: number;
}

export interface IGeneralSettingsOtherForm {
  minimumAmount: number;
  maximumAmount: number;
}

export interface IGeneralReferralSettingsForm {
  referralRewardForSignUp: number;
  level1: number;
  level2: number;
  level3: number;
}

export interface IGeneralKycSettingsForm {
  kycMandatory: string;
  nidVerificationMandatory: string;
  drivingLicenseVerificationMandatory: string;
  passportVerificationMandatory: string;
}

export interface IFeatureSettingsForm {
  multiSignatureStatus: string;
  maxCo: number;
  approvals: number;
  googleReCaptchaStatus: string;
  googleReCaptchaSiteKey: string;
  googleReCaptchaSecretKey: string;
  swapStatus: string;
}

export interface IPaymentMethodsForm {
  coinPayment: string;
  bankDeposit: string;
  creditCard: string;
}
