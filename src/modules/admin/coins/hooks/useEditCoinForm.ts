import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {IEditCoinForm, ICoinData} from "../interfaces";

import * as Yup from "yup";

const schema: Yup.ObjectSchema<IEditCoinForm> = Yup.object().shape({
  coinName: Yup.string().required("Coin Name is required"),
  coinType: Yup.string().required("Coin Type is required"),
  minimumWithdrawal: Yup.number().required("Minimum Withdrawal is required"),
  maximumWithdrawal: Yup.number().required("Maximum Withdrawal is required"),
  withdrawalFees: Yup.number().required("Fees Percentage is required"),
  activeStatus: Yup.string().required("Status is required"),
  withdrawalStatus: Yup.string().required("Status is required"),
  coinIcon: Yup.string().required("Status is required"),
});

const useEditCoinForm = () => {
  const {hide, data} = useModal();

  const coinData = data as ICoinData;

  const form = useForm<IEditCoinForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      coinName: coinData.coinName,
      minimumWithdrawal: coinData.minWithdrawAmount,
      maximumWithdrawal: coinData.maxWithdrawAmount,
      withdrawalFees: coinData.feesPercentage,
      activeStatus: coinData.status,
      withdrawalStatus: coinData.status,
      coinIcon: "",
    },
  });

  const handleSubmit = form.handleSubmit((values: IEditCoinForm) => {
    console.log(values);
    hide();
  });

  return {form, handleSubmit};
};

export default useEditCoinForm;
