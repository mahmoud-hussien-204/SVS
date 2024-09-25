import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {ICreatePlanForm, PlanFeesMethodEnum, PlanStatusEnum} from "../interfaces";

import * as Yup from "yup";

const schema: Yup.ObjectSchema<ICreatePlanForm> = Yup.object().shape({
  name: Yup.string().required("This field is required"),
  duration: Yup.number().typeError("Duration must be a number").required("This field is required"),
  minimumAmount: Yup.number()
    .typeError("Minimum amount must be a number")
    .required("This field is required"),
  feesMethod: Yup.string()
    .oneOf([PlanFeesMethodEnum.FIXED, PlanFeesMethodEnum.PERCENTAGE], "Please select a fees method")
    .required("This field is required"),
  bonusCoinType: Yup.string().required("This field is required"),
  bonus: Yup.number().typeError("Bonus must be a number").required("This field is required"),
  description: Yup.string().required("This field is required"),
  activationStatus: Yup.string()
    .oneOf([PlanStatusEnum.ACTIVE, PlanStatusEnum.INACTIVE], "Please select a status")
    .required("This field is required"),
  image: Yup.mixed<File>()
    .required("This field is required")
    .test("fileType", "Unsupported file format", (value) => {
      return value && value instanceof File;
    }),
});

const useCreatePlanForm = () => {
  const {hide} = useModal();

  const form = useForm<ICreatePlanForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: ICreatePlanForm) => {
    console.log(values);
    hide();
  });

  return {form, handleSubmit};
};

export default useCreatePlanForm;
