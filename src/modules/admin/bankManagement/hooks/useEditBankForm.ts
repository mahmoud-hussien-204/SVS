import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {IEditBankForm, IBankItem} from "../interfaces";

import * as Yup from "yup";

const schema: Yup.ObjectSchema<IEditBankForm> = Yup.object().shape({
  accountNumber: Yup.number()
    .typeError("The Field must be a number")
    .required("This field is required"),
  bankAddress: Yup.string().required("This field is required"),
  bankName: Yup.string().required("This field is required"),
  country: Yup.string().required("This field is required"),
  description: Yup.string().required("This field is required"),
  holderAddress: Yup.string().required("This field is required"),
  holderName: Yup.string().required("This field is required"),
  iban: Yup.string().required("This field is required"),
  swiftCode: Yup.string().required("This field is required"),
  status: Yup.string().required("This field is required"),
});

const useEditBankForm = () => {
  const {hide, data} = useModal();

  const bankData = data as IBankItem;

  const form = useForm<IEditBankForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      accountNumber: bankData?.accountNumber,
      bankAddress: bankData?.bankAddress,
      bankName: bankData?.bankName,
      country: bankData?.country,
      description: bankData?.description,
      holderAddress: bankData?.holderAddress,
      holderName: bankData?.holderName,
      iban: bankData?.iban,
      swiftCode: bankData?.swiftCode,
      status: bankData?.status,
    },
  });

  const handleSubmit = form.handleSubmit((values: IEditBankForm) => {
    console.log(values);
    hide();
  });

  return {form, handleSubmit};
};

export default useEditBankForm;
