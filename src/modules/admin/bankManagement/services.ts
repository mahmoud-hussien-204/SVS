import InterceptorHelper from "@/helpers/intercepterHelper";

import {IBankItem} from "./interfaces";

import AppHelper from "@/helpers/appHelper";

export const apiGetBankList = ({limit, page, search}: IQueryParams) => {
  const data = AppHelper.urlSearchParams({
    page,
    length: limit,
    "search[value]": search,
    searchableFields: '["account_holder_name","account_holder_address","iban","country"]',
  });

  return InterceptorHelper.intercept<IResponse<IBankItem[]>>(`/admin/banks?${data}`);
};
