import * as Yup from "yup";

import {IUpdatePassword} from "../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

const schema: Yup.ObjectSchema<IUpdatePassword> = Yup.object().shape({
  currentPassword: Yup.string().required("Current password is required"),
  newPassword: Yup.string().required("New password is required"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("newPassword")], "Passwords must match"),
});

const useUpdatePasswordForm = () => {
  const form = useForm<IUpdatePassword>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: IUpdatePassword) => {
    console.log(values);
  });

  return {form, handleSubmit};
};

export default useUpdatePasswordForm;
