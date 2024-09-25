import * as Yup from "yup";

import {IGeneralReferralSettingsForm} from "../../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

const schema: Yup.ObjectSchema<IGeneralReferralSettingsForm> = Yup.object().shape({
  referralRewardForSignUp: Yup.number()
    .typeError("The Field must be a number")
    .required("This field is required"),
  level1: Yup.number().typeError("The Field must be a number").required("This field is required"),
  level2: Yup.number().typeError("The Field must be a number").required("This field is required"),
  level3: Yup.number().typeError("The Field must be a number").required("This field is required"),
});

const useGeneralReferralSettingsForm = () => {
  const form = useForm<IGeneralReferralSettingsForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: IGeneralReferralSettingsForm) => {
    console.log(values);
  });

  return {form, handleSubmit};
};

export default useGeneralReferralSettingsForm;
