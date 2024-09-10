import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {IAddWalletForm} from "../interfaces";

import useModal from "@/hooks/useModal";

const schema: Yup.ObjectSchema<IAddWalletForm> = Yup.object().shape({
  walletType: Yup.string().required("Please select wallet type"),
  walletName: Yup.string().required("Please enter wallet name"),
  coinType: Yup.string().required("Please select coin type"),
});

const useAddWalletForm = () => {
  const {hide} = useModal();

  const form = useForm<IAddWalletForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: IAddWalletForm) => {
    console.log(values);
    hide();
  });

  return {form, handleSubmit};
};

export default useAddWalletForm;
