import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {IAddUserForm} from "../interfaces";

import * as Yup from "yup";

const schema: Yup.ObjectSchema<IAddUserForm> = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("First name is required"),
  email: Yup.string().email("Enter a valid email").required("email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  role: Yup.string().required("Role is required"),
});

const useAddUserForm = () => {
  const {hide} = useModal();

  const form = useForm<IAddUserForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: IAddUserForm) => {
    console.log(values);
    hide();
  });

  return {form, handleSubmit};
};

export default useAddUserForm;
