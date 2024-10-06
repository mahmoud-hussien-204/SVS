import InterceptorHelper from "@/helpers/interceptorHelper";
import {IReferralData} from "./interfaces";

export const apiGetReferralData = async () => {
  return InterceptorHelper.intercept<IReferralData>(`/user/referral`);
};

export const apiGetEarningsData = async () => {
  return InterceptorHelper.intercept<IReferralData>(`/user/referral-earning-history`);
};
