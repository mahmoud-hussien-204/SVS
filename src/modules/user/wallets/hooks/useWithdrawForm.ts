import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {IWithdrawForm} from "../interfaces";

import useModal from "@/hooks/useModal";
import { apiWithdrawWallet } from "../services";
import useMutation from "@/hooks/useMutation";

const schema: Yup.ObjectSchema<IWithdrawForm> = Yup.object().shape({
  address: Yup.string().required("Wallet address is required"),
  amount: Yup.number()
    .required("Please enter wallet name")
    .typeError("Amount must be a number")
    .moreThan(0, "Amount must be greater than 0"),
  message: Yup.string().optional(),
  wallet_id: Yup.number().required("Please select wallet"),
  code: Yup.string().required("Please enter 2FA code"),
});

const useWithdrawForm = () => {
  const {hide} = useModal();

  const form = useForm<IWithdrawForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const {mutate , isPending} = useMutation({
    mutationFn: apiWithdrawWallet,
    mutationKey: ["user-withdraw-wallet"],
  })

  const handleSubmit = form.handleSubmit((values: IWithdrawForm) => {
    mutate(values ,{
      onSuccess: () => {
        hide();
      },
    });
  });

  return {form, handleSubmit , isPending};
};

export default useWithdrawForm;
