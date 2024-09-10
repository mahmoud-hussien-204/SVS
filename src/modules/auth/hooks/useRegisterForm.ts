import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";

import * as Yup from "yup";

import { IRegisterForm } from "../interfaces";

const schema: Yup.ObjectSchema<IRegisterForm> = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("First name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const useRegisterForm = () => {
  const form = useForm<IRegisterForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: IRegisterForm) => {
    console.log(values);
  });

  return { form, handleSubmit };
};

export default useRegisterForm;
