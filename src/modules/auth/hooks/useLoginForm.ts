import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";

import * as Yup from "yup";

import { ILoginForm } from "../interfaces";

import useAuth from "./useAuth";

import { useNavigate } from "react-router-dom";

import { fakeDataUsers } from "@/fakeData";

const schema: Yup.ObjectSchema<ILoginForm> = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const useLoginForm = () => {
  const navigate = useNavigate();

  const { saveUser } = useAuth();

  const form = useForm<ILoginForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: ILoginForm) => {
    const user = fakeDataUsers.find(
      (user) => user.email === values.email && user.password === values.password
    );

    if (user) {
      saveUser(user);
      navigate("/");
    }
  });

  return { form, handleSubmit };
};

export default useLoginForm;
