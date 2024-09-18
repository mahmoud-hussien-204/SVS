import * as Yup from "yup";

import {IUpdatePassword} from "../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

import useMutation from "@/hooks/useMutation";

import {apiChnaggePassword} from "../services";

const schema: Yup.ObjectSchema<IUpdatePassword> = Yup.object().shape({
  password: Yup.string().required("Current password is required"),
  new_password: Yup.string().required("New password is required"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("new_password")], "Passwords must match"),
});

const useUpdatePasswordForm = () => {
  const form = useForm<IUpdatePassword>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiChnaggePassword,
    mutationKey: ["user-change-password"],
  });

  const handleSubmit = form.handleSubmit((values: IUpdatePassword) => {
    console.log(values);
    const {confirmPassword, ...rest} = values;
    mutate(rest);
  });

  return {form, handleSubmit, isPending};
};

export default useUpdatePasswordForm;
