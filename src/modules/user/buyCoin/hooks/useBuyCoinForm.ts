import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {IBuyCoinForm} from "../interfaces";

import useModal from "@/hooks/useModal";

import useQuery from "@/hooks/useQuery";

import {apiGetBuyCoin} from "../services";

const schema: Yup.ObjectSchema<IBuyCoinForm> = Yup.object().shape({
  coin: Yup.number()
    .typeError("Amount must be a number")
    .required("Amount is required")
    .moreThan(0, "Amount must be greater than 0"),
  payment_type: Yup.string().required("Type is required"),
});

const useSendRequestForm = () => {
  const {hide} = useModal();

  const {data} = useQuery({
    queryFn: apiGetBuyCoin,
    queryKey: ["user-buy-coin"],
  });

  const form = useForm<IBuyCoinForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: IBuyCoinForm) => {
    console.log(values);
    hide();
  });

  return {form, handleSubmit, data};
};

export default useSendRequestForm;
