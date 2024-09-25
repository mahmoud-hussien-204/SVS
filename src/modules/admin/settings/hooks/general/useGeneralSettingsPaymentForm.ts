import * as Yup from "yup";

import {IGeneralSettingsPaymentForm} from "../../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

const schema: Yup.ObjectSchema<IGeneralSettingsPaymentForm> = Yup.object().shape({
  COIN_PAYMENT_PUBLIC_KEY: Yup.string().required("This field is required"),
  COIN_PAYMENT_PRIVATE_KEY: Yup.string().required("This field is required"),
  ipn_merchant_id: Yup.string().required("This field is required"),
  ipn_secret: Yup.string().required("This field is required"),
  STRIPE_KEY: Yup.string().required("This field is required"),
  STRIPE_SECRET: Yup.string().required("This field is required"),
});

const useGeneralSettingsPaymentForm = () => {
  const form = useForm<IGeneralSettingsPaymentForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: IGeneralSettingsPaymentForm) => {
    console.log(values);
  });

  return {form, handleSubmit};
};

export default useGeneralSettingsPaymentForm;
