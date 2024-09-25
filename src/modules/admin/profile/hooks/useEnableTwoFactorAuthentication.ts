import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {IEnableTwoFactorAuthentication} from "../interfaces";

const schema: Yup.ObjectSchema<IEnableTwoFactorAuthentication> = Yup.object().shape({
  code: Yup.string().required("Code is required"),
});

const useEnableTwoFactorAuthentication = () => {
  const form = useForm<IEnableTwoFactorAuthentication>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: IEnableTwoFactorAuthentication) => {
    console.log(values);
  });

  return {handleSubmit, form};
};

export default useEnableTwoFactorAuthentication;
