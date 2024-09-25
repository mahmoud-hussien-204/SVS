import * as Yup from "yup";

import {IGeneralSettingsOtherForm} from "../../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

const schema: Yup.ObjectSchema<IGeneralSettingsOtherForm> = Yup.object().shape({
  minimumAmount: Yup.number()
    .typeError("Minimum amount must be a number")
    .required("This field is required"),
  maximumAmount: Yup.number()
    .typeError("Minimum amount must be a number")
    .required("This field is required"),
});

const useGeneralSettingsOtherForm = () => {
  const form = useForm<IGeneralSettingsOtherForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: IGeneralSettingsOtherForm) => {
    console.log(values);
  });

  return {form, handleSubmit};
};

export default useGeneralSettingsOtherForm;
