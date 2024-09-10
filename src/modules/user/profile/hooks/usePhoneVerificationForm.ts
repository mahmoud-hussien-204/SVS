import * as Yup from "yup";

import {IPhoneVerification} from "../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

import useAuth from "@/modules/auth/hooks/useAuth";

const schema: Yup.ObjectSchema<IPhoneVerification> = Yup.object().shape({
  code: Yup.string().required("Code is required"),
  phone: Yup.string().required("Phone is required"),
});

const usePhoneVerificationForm = () => {
  const {userData} = useAuth();

  const form = useForm<IPhoneVerification>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      code: "",
      phone: userData?.phone || "",
    },
  });

  const handleSubmit = form.handleSubmit((values: IPhoneVerification) => {
    console.log(values);
  });

  return {form, handleSubmit};
};

export default usePhoneVerificationForm;
