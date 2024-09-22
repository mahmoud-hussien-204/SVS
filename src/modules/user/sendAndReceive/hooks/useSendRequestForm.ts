import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {ENUM_SEND_REQUEST_FORM_TYPE, ISendRequestForm} from "../interfaces";

import useModal from "@/hooks/useModal";
import useMutation from "@/hooks/useMutation";
import { apiSendCoinRequest } from "../services";
import { useQueryClient } from "@tanstack/react-query";
import useApiUrlFilter from "@/hooks/useApiUrlFilter";

const schema: Yup.ObjectSchema<ISendRequestForm> = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  amount: Yup.number()
    .typeError("Amount must be a number")
    .required("Amount is required")
    .moreThan(0, "Amount must be greater than 0"),
  wallet_id: Yup.string().when("type", (value)=>{
    if(value[0] == ENUM_SEND_REQUEST_FORM_TYPE.SEND_COIN)
      return Yup.string().required("Wallet is required")

    return Yup.string()
  }),
  type: Yup.string().required("Type is required"),
});

const useSendRequestForm = () => {
  const {hide} = useModal();
  
  const form = useForm<ISendRequestForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { mutate , isPending } = useMutation({
    mutationFn: apiSendCoinRequest,
    mutationKey: ["send-user-coin-request"],
  })

  const queryClient = useQueryClient();

  const { tabSearchParams , pageSearchParams, limitSearchParams, searchSearchParams } = useApiUrlFilter()

  const handleSubmit = form.handleSubmit((values: ISendRequestForm) => {
    mutate(values,{
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["get-userrequest-coin-history", tabSearchParams, pageSearchParams, limitSearchParams, searchSearchParams] });
        hide();
      }
    });
  });

  return {form, handleSubmit , isPending};
};

export default useSendRequestForm;
