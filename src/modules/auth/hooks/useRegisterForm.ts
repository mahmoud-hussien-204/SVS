import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {IRegisterForm} from "../interfaces";

import {apiRegisterUser} from "../services";

import useMutation from "@/hooks/useMutation";

import {useNavigate} from "react-router";

const schema: Yup.ObjectSchema<IRegisterForm> = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("First name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const useRegisterForm = () => {
  const navigate = useNavigate();
  const form = useForm<IRegisterForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiRegisterUser,
    mutationKey: ["register-user"],
  });

  const handleSubmit = form.handleSubmit((values: IRegisterForm) => {
    mutate(values, {
      onSuccess: () => {
        navigate("/auth/login");
      },
    });
  });

  return {form, handleSubmit, isPending};
};

export default useRegisterForm;
