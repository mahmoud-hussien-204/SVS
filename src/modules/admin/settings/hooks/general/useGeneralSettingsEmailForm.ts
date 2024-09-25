import * as Yup from "yup";

import {IGeneralSettingsEmailForm} from "../../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

const schema: Yup.ObjectSchema<IGeneralSettingsEmailForm> = Yup.object().shape({
  mail_host: Yup.string().required("This field is required"),
  mail_port: Yup.number()
    .typeError("This field must be a number")
    .required("This field is required"),
  mail_username: Yup.string().email("Enter valid email").required("This field is required"),
  mail_password: Yup.string().required("This field is required"),
  mail_encryption: Yup.string().required("This field is required"),
  mail_from_address: Yup.string().required("This field is required"),
});

const useGeneralSettingsEmailForm = () => {
  const form = useForm<IGeneralSettingsEmailForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: IGeneralSettingsEmailForm) => {
    console.log(values);
  });

  return {form, handleSubmit};
};

export default useGeneralSettingsEmailForm;
