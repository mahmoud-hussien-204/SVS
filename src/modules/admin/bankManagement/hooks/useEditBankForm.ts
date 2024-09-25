import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {IEditBankForm, IBankItem} from "../interfaces";

import {schema} from "./useCreateBankForm";

const useEditBankForm = () => {
  const {hide, data} = useModal();

  const bankData = data as IBankItem;

  console.log({
    status: bankData.status,
  });

  const form = useForm<IEditBankForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      account_holder_name: bankData.account_holder_name,
      account_holder_address: bankData.account_holder_address,
      bank_name: bankData.bank_name,
      bank_address: bankData.bank_address,
      country: bankData.country,
      swift_code: bankData.swift_code,
      iban: bankData.iban,
      note: bankData.note,
      status: bankData.status.toLowerCase(),
    },
  });

  const handleSubmit = form.handleSubmit((values: IEditBankForm) => {
    console.log(values);
    hide();
  });

  return {form, handleSubmit};
};

export default useEditBankForm;
