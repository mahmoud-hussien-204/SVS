import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {ITransferCoinForm, IWallet} from "../interfaces";

import useModal from "@/hooks/useModal";

import {constantTransferCoinMethods} from "../constants";

import {apiTransferCoin} from "../services";

import useMutation from "@/hooks/useMutation";

const schema: Yup.ObjectSchema<ITransferCoinForm> = Yup.object().shape({
  wallet_id: Yup.string().required("Please select wallet"),
  amount: Yup.number()
    .required("Please enter amount")
    .typeError("Amount must be a number")
    .moreThan(0, "Amount must be greater than 0"),
  type: Yup.string()
    .required("Please choose method type")
    .oneOf(constantTransferCoinMethods, "Invalid coin type"),
});

const useTransferCoinForm = () => {
  const {hide, data} = useModal();

  const wallets = data as IWallet[];

  const form = useForm<ITransferCoinForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      wallet_id: wallets[0].id.toString(),
      type: constantTransferCoinMethods[0],
    },
  });

  const {mutate, isPending} = useMutation({
    mutationFn: (values: ITransferCoinForm) => apiTransferCoin(values),
    mutationKey: ["user-transfer-coin"],
  });

  const handleSubmit = form.handleSubmit((values: ITransferCoinForm) => {
    mutate(values, {
      onSuccess: () => {
        hide();
      },
    });
  });

  return {form, handleSubmit, isPending};
};

export default useTransferCoinForm;
