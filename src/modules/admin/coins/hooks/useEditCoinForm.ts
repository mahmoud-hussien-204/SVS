import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {IEditCoinForm, ICoinData} from "../interfaces";

import * as Yup from "yup";

const schema: Yup.ObjectSchema<IEditCoinForm> = Yup.object().shape({
  name: Yup.string().required("Coin Name is required"),
  type: Yup.string().required("Coin Type is required"),
  minimum_withdrawal: Yup.string().required("Minimum Withdrawal is required"),
  maximum_withdrawal: Yup.string().required("Maximum Withdrawal is required"),
  fee: Yup.string().required("Fees Percentage is required"),
  activeStatus: Yup.string().required("Status is required"),
  status: Yup.string().required("Status is required"),
  coinIcon: Yup.string().required("Status is required"),
});

const useEditCoinForm = () => {
  const {hide, data} = useModal();

  const coinData = data as ICoinData;

  const form = useForm<IEditCoinForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      name: coinData.name,
      minimum_withdrawal: coinData.minimum_withdrawal,
      maximum_withdrawal: coinData.maximum_withdrawal,
      fee: coinData.fee,
      activeStatus: coinData.status,
      status: coinData.status,
      type: coinData.type,
      coinIcon: "",
    },
  });

  const handleSubmit = form.handleSubmit((values: IEditCoinForm) => {
    console.log(values);
    // hide();
  });

  return {form, handleSubmit};
};

export default useEditCoinForm;
