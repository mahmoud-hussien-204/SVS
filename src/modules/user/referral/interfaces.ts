export interface IReferralData {
  success: boolean;
  title: string;
  referrals: [];
  url: string;
  referralLevels: unknown;
  max_referral_level: string;
  monthlyEarningHistories: [];
  monthArray: [];
}

export interface Affiliate {
  id: number;
  user_id: number;
  code: string;
  status: number;
  deleted_at: string;
  created_at: string;
  updated_at: string;
}
