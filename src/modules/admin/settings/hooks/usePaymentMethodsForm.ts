import * as Yup from "yup";

import {IPaymentMethodsForm} from "../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

const schema: Yup.ObjectSchema<IPaymentMethodsForm> = Yup.object().shape({
  coinPayment: Yup.string().required("This field is required"),
  bankDeposit: Yup.string().required("This field is required"),
  creditCard: Yup.string().required("This field is required"),
});

const usePaymentMethodsForm = () => {
  const form = useForm<IPaymentMethodsForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: IPaymentMethodsForm) => {
    console.log(values);
  });

  return {form, handleSubmit};
};

export default usePaymentMethodsForm;
