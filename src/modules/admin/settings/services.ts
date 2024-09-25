import InterceptorHelper from "@/helpers/intercepterHelper";

export const apiRunConfigurationCommand = (id: string) =>
  InterceptorHelper.intercept(`/admin/run-admin-command/${id}`);
