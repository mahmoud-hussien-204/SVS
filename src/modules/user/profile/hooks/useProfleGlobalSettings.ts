import * as Yup from "yup";

import {IProfileGlobalSettings} from "../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

import useMutation from "@/hooks/useMutation";

import {apiUpdateProfileGlobalSettings} from "../services";

const schema: Yup.ObjectSchema<IProfileGlobalSettings> = Yup.object().shape({
  lang: Yup.string().required("Please select language"),
});

const useProfileGlobalSettings = () => {
  const form = useForm<IProfileGlobalSettings>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiUpdateProfileGlobalSettings,
    mutationKey: ["update-user-global-settings"],
  });

  const handleSubmit = form.handleSubmit((values: IProfileGlobalSettings) => {
    mutate(values);
  });

  return {form, handleSubmit, isPending};
};

export default useProfileGlobalSettings;
