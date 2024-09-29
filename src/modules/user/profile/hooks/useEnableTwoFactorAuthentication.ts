import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {IEnableTwoFactorAuthentication} from "../interfaces";

import useUserProfile from "./useUserProfile";
import useMutation from "@/hooks/useMutation";
import {apiSaveG2fSecret} from "../services";
import useModal from "@/hooks/useModal";

const schema: Yup.ObjectSchema<IEnableTwoFactorAuthentication> = Yup.object().shape({
  google2fa_secret: Yup.string().required("Secret is required"),
  code: Yup.string().required("Code is required"),
});

const useEnableTwoFactorAuthentication = () => {
  const {hide} = useModal();

  const {data} = useUserProfile();

  const form = useForm<IEnableTwoFactorAuthentication>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      google2fa_secret: data?.google2fa_secret,
      code: "",
    },
  });

  const {mutate, isPending, queryClient} = useMutation({
    mutationFn: apiSaveG2fSecret,
    mutationKey: ["save-g2f-secret"],
  });

  const handleSubmit = form.handleSubmit((values: IEnableTwoFactorAuthentication) => {
    mutate(values, {
      onSuccess: () => {
        queryClient.invalidateQueries(["get-user-profile"] as any);
        hide();
      },
    });
  });

  return {handleSubmit, form, isPending};
};

export default useEnableTwoFactorAuthentication;
