import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {IAddWalletForm} from "../interfaces";

import useModal from "@/hooks/useModal";

import useMutation from "@/hooks/useMutation";

import {apiCreateWallet} from "../services";

const schema: Yup.ObjectSchema<IAddWalletForm> = Yup.object().shape({
  type: Yup.string().required("Please select wallet type"),
  wallet_name: Yup.string().required("Please enter wallet name"),
  coin_type: Yup.string().required("Please select coin type"),
});

const useAddWalletForm = () => {
  const {hide} = useModal();

  const form = useForm<IAddWalletForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const {mutate, isPending, queryClient} = useMutation({
    mutationFn: apiCreateWallet,
    mutationKey: ["user-create-wallet"],
  });

  const handleSubmit = form.handleSubmit((values: IAddWalletForm) => {
    console.log(values);
    mutate(values, {
      onSuccess() {
        hide();
        queryClient.invalidateQueries({queryKey: ["user-my-wallets"]});
      },
    });
  });

  return {form, handleSubmit, isPending};
};

export default useAddWalletForm;
