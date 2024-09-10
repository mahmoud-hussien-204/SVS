import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {ITransferCoinForm} from "../interfaces";

import useModal from "@/hooks/useModal";

import {constantTransferCoinMethods} from "../constants";

const schema: Yup.ObjectSchema<ITransferCoinForm> = Yup.object().shape({
  wallet: Yup.string().required("Please select wallet"),
  amount: Yup.number()
    .required("Please enter amount")
    .typeError("Amount must be a number")
    .moreThan(0, "Amount must be greater than 0"),
  type: Yup.string()
    .required("Please choose method type")
    .oneOf(constantTransferCoinMethods, "Invalid coin type"),
});

const useTransferCoinForm = () => {
  const {hide} = useModal();

  const form = useForm<ITransferCoinForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: ITransferCoinForm) => {
    console.log(values);
    hide();
  });

  return {form, handleSubmit};
};

export default useTransferCoinForm;
