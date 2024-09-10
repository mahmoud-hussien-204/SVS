import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";

import * as Yup from "yup";

import { ICreateNewPasswordForm } from "../interfaces";

import { useNavigate } from "react-router-dom";

const schema: Yup.ObjectSchema<ICreateNewPasswordForm> = Yup.object().shape({
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const useCreateNewPasswordForm = () => {
  const navigate = useNavigate();

  const form = useForm<ICreateNewPasswordForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: ICreateNewPasswordForm) => {
    console.log(values);
    navigate("/auth/login");
  });

  return { form, handleSubmit };
};

export default useCreateNewPasswordForm;
