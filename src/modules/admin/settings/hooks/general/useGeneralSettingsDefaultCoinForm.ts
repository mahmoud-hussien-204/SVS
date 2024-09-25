import * as Yup from "yup";

import {IGeneralSettingsDefaultToken} from "../../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

const schema: Yup.ObjectSchema<IGeneralSettingsDefaultToken> = Yup.object().shape({
  coin_name: Yup.string().required("Coin Name is required"),
  coin_price: Yup.number()
    .typeError("This field must be a number")
    .required("Coin Price is required"),
  contract_coin_name: Yup.string().required("Contract Coin Name is required"),
  chain_link: Yup.string().required("Chain Link is required"),
  chain_id: Yup.string().required("Chain Id is required"),
  contract_address: Yup.string().required("Contract Address is required"),
  wallet_address: Yup.string().required("Wallet Address is required"),
  private_key: Yup.string().required("Wallet Address is required"),
  contract_decimal: Yup.number()
    .typeError("This field must be a number")
    .required("Contract Decimal is required"),
  gas_limit: Yup.number()
    .typeError("This field must be a number")
    .required("Contract Decimal is required"),
  max_send_limit: Yup.number()
    .typeError("This field must be a number")
    .required("Contract Decimal is required"),
});

const useGeneralSettingsDefaultCoinForm = () => {
  const form = useForm<IGeneralSettingsDefaultToken>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: IGeneralSettingsDefaultToken) => {
    console.log(values);
  });

  return {form, handleSubmit};
};

export default useGeneralSettingsDefaultCoinForm;
