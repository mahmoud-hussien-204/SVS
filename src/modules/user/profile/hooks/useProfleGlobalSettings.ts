import * as Yup from "yup";

import {IProfileGlobalSettings} from "../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

const schema: Yup.ObjectSchema<IProfileGlobalSettings> = Yup.object().shape({
  language: Yup.string().required("Please select language"),
});

const useProfileGlobalSettings = () => {
  const form = useForm<IProfileGlobalSettings>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: IProfileGlobalSettings) => {
    console.log(values);
  });

  return {form, handleSubmit};
};

export default useProfileGlobalSettings;
