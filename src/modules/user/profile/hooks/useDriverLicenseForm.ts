import {IIdVerificationForm} from "../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

import AppHelper from "@/helpers/appHelper";

import {schemaIdVerification} from "../constants";
import useMutation from "@/hooks/useMutation";
import {apiUploadDeiverLicense} from "../services";
import useModal from "@/hooks/useModal";
import useUserProfile from "./useUserProfile";

const useDriverLicenseForm = () => {
  const {hide} = useModal();
  const {data} = useUserProfile();

  const form = useForm<IIdVerificationForm>({
    resolver: yupResolver(schemaIdVerification),
    mode: "onTouched",
    defaultValues: {
      file_two: data?.drive_front?.photo || "",
      file_three: data?.drive_back?.photo || "",
    },
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiUploadDeiverLicense,
    mutationKey: ["user-nid-upload"],
  });

  const handleSubmit = form.handleSubmit((values: IIdVerificationForm) => {
    const formData = AppHelper.toFormData(values);
    mutate(formData, {
      onSuccess: () => {
        hide();
      },
    });
  });

  return {form, handleSubmit, isPending};
};

export default useDriverLicenseForm;
