import * as Yup from "yup";

import {IGeneralSettingsTwilioForm} from "../../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

const schema: Yup.ObjectSchema<IGeneralSettingsTwilioForm> = Yup.object().shape({
  twillo_secret_key: Yup.string().required("This field is required"),
  twillo_auth_token: Yup.string().required("This field is required"),
  twillo_number: Yup.number()
    .typeError("This field must be a number")
    .required("This field is required"),
});

const useGeneralSettingsTwilioForm = () => {
  const form = useForm<IGeneralSettingsTwilioForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: IGeneralSettingsTwilioForm) => {
    console.log(values);
  });

  return {form, handleSubmit};
};

export default useGeneralSettingsTwilioForm;
