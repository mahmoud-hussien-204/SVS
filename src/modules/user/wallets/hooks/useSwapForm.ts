import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {ISwapCoinForm, IWallet} from "../interfaces";

import useModal from "@/hooks/useModal";

import useMutation from "@/hooks/useMutation";

import {apiSwapCoin} from "../services";

const schema: Yup.ObjectSchema<ISwapCoinForm> = Yup.object().shape({
  from_coin_id: Yup.number().required("Wallet address is required"),
  to_coin_id: Yup.number().required("Wallet address is required"),
  amount: Yup.number()
    .required("Please enter wallet name")
    .typeError("Amount must be a number")
    .moreThan(0, "Amount must be greater than 0"),
});

const useSwapForm = () => {
  const {hide, data} = useModal();
  const id = (data as IWallet).id;
  const form = useForm<ISwapCoinForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      from_coin_id: id,
      amount: 1,
    },
  });

  const {mutate, queryClient} = useMutation({
    mutationFn: apiSwapCoin,
  });

  const handleSubmit = form.handleSubmit((values: ISwapCoinForm) => {
    mutate(values, {
      onSuccess: () => {
        queryClient.invalidateQueries(["user-my-wallets"] as any);
        hide();
      },
    });
  });

  return {form, handleSubmit, isPending: false};
};

export default useSwapForm;
