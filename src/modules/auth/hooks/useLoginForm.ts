import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {ILoginForm} from "../interfaces";

import useAuth from "./useAuth";

import {useNavigate} from "react-router-dom";

import {apiLoginUser} from "../services";

import useMutation from "@/hooks/useMutation";

const schema: Yup.ObjectSchema<ILoginForm> = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const useLoginForm = () => {
  const navigate = useNavigate();

  const {saveUser} = useAuth();

  const form = useForm<ILoginForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiLoginUser,
    mutationKey: ["login-user"],
  });

  const handleSubmit = form.handleSubmit(async (values: ILoginForm) => {
    mutate(values, {
      onSuccess: (data) => {
        const userRole = Number(data.data.user_info.role) === 1 ? "admin" : "user";

        saveUser({...data.data.user_info, token: data.data.access_token, role: userRole});
        navigate("/");
      },
    });
  });

  return {form, handleSubmit, isPending};
};

export default useLoginForm;
