import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {ICreateBankForm} from "../interfaces";

import * as Yup from "yup";

export const schema: Yup.ObjectSchema<ICreateBankForm> = Yup.object().shape({
  account_holder_name: Yup.string().required("This field is required"),
  account_holder_address: Yup.string().required("This field is required"),
  bank_name: Yup.string().required("This field is required"),
  bank_address: Yup.string().required("This field is required"),
  country: Yup.string().required("This field is required"),
  swift_code: Yup.string().required("This field is required"),
  note: Yup.string().required("This field is required"),
  iban: Yup.string().required("This field is required"),
  status: Yup.string().required("This field is required"),
});

const useCreateBankForm = () => {
  const {hide} = useModal();

  const form = useForm<ICreateBankForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: ICreateBankForm) => {
    console.log(values);
    hide();
  });

  return {form, handleSubmit};
};

export default useCreateBankForm;
