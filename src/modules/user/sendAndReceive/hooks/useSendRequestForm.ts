import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {ISendRequestForm} from "../interfaces";

import useModal from "@/hooks/useModal";

const schema: Yup.ObjectSchema<ISendRequestForm> = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  amount: Yup.number()
    .typeError("Amount must be a number")
    .required("Amount is required")
    .moreThan(0, "Amount must be greater than 0"),
  wallet: Yup.string().required("Wallet is required"),
});

const useSendRequestForm = () => {
  const {hide} = useModal();

  const form = useForm<ISendRequestForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: ISendRequestForm) => {
    console.log(values);
    hide();
  });

  return {form, handleSubmit};
};

export default useSendRequestForm;
