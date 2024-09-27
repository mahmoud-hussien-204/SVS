import * as Yup from "yup";

import {IIdVerificationForm} from "../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";
import AppHelper from "@/helpers/appHelper";

const schema: Yup.ObjectSchema<IIdVerificationForm> = Yup.object().shape({
  back_img: Yup.mixed<File>().required("Back Id Image is required"),
  front_img: Yup.mixed<File>().required("Front Id Image is required"),
});

const usePassportVerificationForm = () => {
  const form = useForm<IIdVerificationForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: IIdVerificationForm) => {
    const formData = AppHelper.toFormData(values);
    console.log(...formData);
  });

  return {form, handleSubmit};
};

export default usePassportVerificationForm;
