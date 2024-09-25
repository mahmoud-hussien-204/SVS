import * as Yup from "yup";

import {IFeatureSettingsForm} from "../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

const schema: Yup.ObjectSchema<IFeatureSettingsForm> = Yup.object().shape({
  multiSignatureStatus: Yup.string().required("This field is required"),
  maxCo: Yup.number().typeError("This field must be a number").required("This field is required"),
  approvals: Yup.number()
    .typeError("This field must be a number")
    .required("This field is required"),
  googleReCaptchaStatus: Yup.string().required("This field is required"),
  googleReCaptchaSiteKey: Yup.string().required("This field is required"),
  googleReCaptchaSecretKey: Yup.string().required("This field is required"),
  swapStatus: Yup.string().required("This field is required"),
});

const useFeatureSettingsForm = () => {
  const form = useForm<IFeatureSettingsForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: IFeatureSettingsForm) => {
    console.log(values);
  });

  return {form, handleSubmit};
};

export default useFeatureSettingsForm;
