import InterceptorHelper from "@/helpers/intercepterHelper"

export const apiGetReferralData = async () => {
  return InterceptorHelper.intercept(`/user/referral`)
}