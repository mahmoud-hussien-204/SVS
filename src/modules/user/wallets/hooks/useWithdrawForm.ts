import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {IWithdrawForm} from "../interfaces";

import useModal from "@/hooks/useModal";

const schema: Yup.ObjectSchema<IWithdrawForm> = Yup.object().shape({
  walletAddress: Yup.string().required("Wallet address is required"),
  amount: Yup.number()
    .required("Please enter wallet name")
    .typeError("Amount must be a number")
    .moreThan(0, "Amount must be greater than 0"),
  comment: Yup.string().optional(),
});

const useWithdrawForm = () => {
  const {hide} = useModal();

  const form = useForm<IWithdrawForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: IWithdrawForm) => {
    console.log(values);
    hide();
  });

  return {form, handleSubmit};
};

export default useWithdrawForm;
