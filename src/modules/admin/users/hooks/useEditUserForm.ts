import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {IAddUserForm, IUserData} from "../interfaces";

import * as Yup from "yup";

const schema: Yup.ObjectSchema<IAddUserForm> = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("First name is required"),
  email: Yup.string().email("Enter a valid email").required("email is required"),
  phone: Yup.string().required("Phone number is required"),
  role: Yup.number().required("Role is required"),
});

const useEditUserForm = () => {
  const {hide, data} = useModal();

  const userData = data as IUserData;

  const form = useForm<IAddUserForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      email: userData?.email || "",
      first_name: userData?.first_name || "",
      last_name: userData?.last_name || "",
      phone: userData?.phone || "",
      role: userData?.role || 1,
    },
  });

  const handleSubmit = form.handleSubmit((values: IAddUserForm) => {
    console.log(values);
    hide();
  });

  return {form, handleSubmit};
};

export default useEditUserForm;
