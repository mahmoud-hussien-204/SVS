import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {IBuyCoinForm} from "../interfaces";

import useQuery from "@/hooks/useQuery";

import {apiGetBuyCoin, apiPostBuyCoin} from "../services";

import useMutation from "@/hooks/useMutation";

import AppHelper from "@/helpers/appHelper";

import {ENUM_BUY_COIN_PAYMENT_TYPE} from "../enums";

import {EnumModals} from "@/enums";

import useModal from "@/hooks/useModal";

const schema: Yup.ObjectSchema<IBuyCoinForm> = Yup.object().shape({
  coin: Yup.number()
    .typeError("Amount must be a number")
    .required("Amount is required")
    .moreThan(0, "Amount must be greater than 0"),
  payment_coin_type: Yup.string(),
  payment_type: Yup.string().required("Type is required"),
  bank_id: Yup.string(),
  sleep: Yup.mixed(),
  token: Yup.string(),
});

const useSendRequestForm = () => {
  const {show} = useModal();

  const {data, isLoading} = useQuery({
    queryFn: apiGetBuyCoin,
    queryKey: ["user-buy-coin"],
  });

  const form = useForm<IBuyCoinForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      coin: 0,
      payment_coin_type: data?.coins[0].type,
    },
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiPostBuyCoin,
  });

  const handleSubmit = form.handleSubmit((values: IBuyCoinForm) => {
    if (values.payment_type == ENUM_BUY_COIN_PAYMENT_TYPE.COIN_PAYMENT) {
      delete values.sleep;
      delete values.bank_id;
    } else if (values.payment_type == ENUM_BUY_COIN_PAYMENT_TYPE.BANK_DEPOSIT) {
      delete values.payment_coin_type;
    }
    const data = AppHelper.toFormData(values);
    mutate(data, {
      onSuccess(data) {
        if (values.payment_type == ENUM_BUY_COIN_PAYMENT_TYPE.COIN_PAYMENT) {
          show(EnumModals.success, {
            ...data,
            ...values,
            payable: (document.getElementById("payable-coin") as HTMLInputElement).value,
          });
        }
      },
    });
  });

  return {form, handleSubmit, data, isLoading, isPending};
};

export default useSendRequestForm;
