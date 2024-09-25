import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {ISettingsForm} from "../interfaces";

import * as Yup from "yup";

const schema: Yup.ObjectSchema<ISettingsForm> = Yup.object().shape({
  minimumAmount: Yup.number()
    .typeError("Minimum amount must be number")
    .required("Minimum amount is required"),
  maximumAmount: Yup.number()
    .typeError("Maximum amount must be number")
    .required("Maximum amount is required"),
});

const useSettingsForm = () => {
  const {hide} = useModal();

  const form = useForm<ISettingsForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: ISettingsForm) => {
    console.log(values);
    hide();
  });

  return {form, handleSubmit};
};

export default useSettingsForm;
