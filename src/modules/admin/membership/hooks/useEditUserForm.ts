import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {IEditUserForm, IUserData} from "../interfaces";

import * as Yup from "yup";

const schema: Yup.ObjectSchema<IEditUserForm> = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("First name is required"),
  email: Yup.string().email("Enter a valid email").required("email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  role: Yup.string().required("Role is required"),
});

const useEditUserForm = () => {
  const {hide, data} = useModal();

  const userData = data as IUserData;

  const form = useForm<IEditUserForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      email: userData?.email || "",
      firstName: userData?.firstName || "",
      lastName: userData?.lastName || "",
      phoneNumber: userData?.phoneNumber || "",
      role: userData?.role || "",
    },
  });

  const handleSubmit = form.handleSubmit((values: IEditUserForm) => {
    console.log(values);
    hide();
  });

  return {form, handleSubmit};
};

export default useEditUserForm;
