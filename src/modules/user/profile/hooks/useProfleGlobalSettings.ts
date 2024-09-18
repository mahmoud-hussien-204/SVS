import * as Yup from "yup";

import {IProfileGlobalSettings} from "../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

import useMutation from "@/hooks/useMutation";

import {apiUpdateProfileGlobalSettings} from "../services";
import useAuth from "@/modules/auth/hooks/useAuth";

const schema: Yup.ObjectSchema<IProfileGlobalSettings> = Yup.object().shape({
  lang: Yup.string().required("Please select language"),
});

const useProfileGlobalSettings = () => {
  const {userData, saveUser} = useAuth();
  const form = useForm<IProfileGlobalSettings>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      lang: userData?.language || "",
    },
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiUpdateProfileGlobalSettings,
    mutationKey: ["update-user-global-settings"],
  });

  const handleSubmit = form.handleSubmit((values: IProfileGlobalSettings) => {
    mutate(values, {
      onSuccess: () => {
        const data: any = {...userData};
        data.language = values.lang;
        saveUser(data);
      },
    });
  });

  return {form, handleSubmit, isPending};
};

export default useProfileGlobalSettings;
