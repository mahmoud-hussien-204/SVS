import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {IRegisterForm} from "../interfaces";

import {apiRegisterUser} from "../services";

import useMutation from "@/hooks/useMutation";

import {useNavigate} from "react-router";
import useAuthJourney from "./useAuthJourney";

const schema: Yup.ObjectSchema<IRegisterForm> = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("First name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const useRegisterForm = () => {
  const navigate = useNavigate();
  const {saveUserEmail} = useAuthJourney();

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
        saveUserEmail(values.email);
        navigate("/auth/email-verify");
      },
    });
  });

  return {form, handleSubmit, isPending};
};

export default useRegisterForm;
