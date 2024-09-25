import * as Yup from "yup";

import {IGeneralSettingsForm} from "../../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

const schema: Yup.ObjectSchema<IGeneralSettingsForm> = Yup.object().shape({
  language: Yup.string().required("This field is required"),
  companyName: Yup.string().required("This field is required"),
  baseCoinType: Yup.string().required("This field is required"),
  copyRightText: Yup.string().required("This field is required"),
  numberOfConfirmation: Yup.number()
    .typeError("Minimum amount must be a number")
    .required("This field is required"),
});

const useGeneralSettingsForm = () => {
  const form = useForm<IGeneralSettingsForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: IGeneralSettingsForm) => {
    console.log(values);
  });

  return {form, handleSubmit};
};

export default useGeneralSettingsForm;
