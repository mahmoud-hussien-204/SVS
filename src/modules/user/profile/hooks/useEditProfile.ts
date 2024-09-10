import * as Yup from "yup";

import {IEditProfile} from "../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

import useAuth from "@/modules/auth/hooks/useAuth";

const schema: Yup.ObjectSchema<IEditProfile> = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  photo: Yup.string().required("Photo is required"),
  country: Yup.string().required("Country is required"),
});

const useEditProfile = () => {
  const {userData} = useAuth();

  const form = useForm<IEditProfile>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      country: "",
      email: userData?.email || "",
      fullName: userData?.name || "",
      phone: userData?.phone || "",
      photo: userData?.photo || "",
    },
  });

  const handleSubmit = form.handleSubmit((values: IEditProfile) => {
    console.log(values);
  });

  return {form, handleSubmit};
};

export default useEditProfile;
