import * as Yup from "yup";

import {IGeneralKycSettingsForm} from "../../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

const schema: Yup.ObjectSchema<IGeneralKycSettingsForm> = Yup.object().shape({
  kycMandatory: Yup.string().required("This field is required"),
  nidVerificationMandatory: Yup.string().required("This field is required"),
  drivingLicenseVerificationMandatory: Yup.string().required("This field is required"),
  passportVerificationMandatory: Yup.string().required("This field is required"),
});

const useGeneralKycSettingsForm = () => {
  const form = useForm<IGeneralKycSettingsForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: IGeneralKycSettingsForm) => {
    console.log(values);
  });

  return {form, handleSubmit};
};

export default useGeneralKycSettingsForm;
