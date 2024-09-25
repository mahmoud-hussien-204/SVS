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

export interface IGeneralSettingsEmailForm {
  mail_host: string;
  mail_port: number;
  mail_username: string;
  mail_password: string;
  mail_encryption: string;
  mail_from_address: string;
}

export interface IGeneralSettingsTwilioForm {
  twillo_secret_key: string;
  twillo_auth_token: string;
  twillo_number: number;
}

export interface IGeneralSettingsPaymentForm {
  COIN_PAYMENT_PUBLIC_KEY: string;
  COIN_PAYMENT_PRIVATE_KEY: string;
  ipn_merchant_id: string;
  ipn_secret: string;
  STRIPE_KEY: string;
  STRIPE_SECRET: string;
}

export interface IGeneralSettingsDefaultToken {
  coin_name: string;
  coin_price: number;
  contract_coin_name: string;
  chain_link: string;
  chain_id: string;
  contract_address: string;
  wallet_address: string;
  private_key: string;
  contract_decimal: number;
  gas_limit: number;
  max_send_limit: number;
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

export interface IConfigurationsItem {
  title: string;
  description: string;
  linkTitle: string;
  id: string;
}
