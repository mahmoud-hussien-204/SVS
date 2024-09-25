import ErrorMessage from "@/components/ErrorMessage";

import Input from "@/components/Input";

import Label from "@/components/Label";

import ModalBody from "@/components/ModalBody";

import {FormProvider, UseFormReturn} from "react-hook-form";

import Select from "@/components/Select";

import Textarea from "@/components/Textarea";

import FileUploader from "@/components/FileUploader";

import {ICreatePlanForm, IEditPlanForm} from "../interfaces";

import {constantPlanActivationStatus, constantPlanFeesMethods} from "../constants";

interface IProps {
  form: UseFormReturn<ICreatePlanForm | IEditPlanForm>;
}

const CreateAndEditPlanForm = ({form}: IProps) => {
  return (
    <FormProvider {...form}>
      <ModalBody>
        <div className='mb-1.25rem grid grid-cols-2 items-center gap-1.25rem'>
          <div>
            <FileUploader name='image' title='Plan Image' locale />
          </div>
          <div>
            <Label htmlFor='plan-form-name'>Plan Name</Label>
            <Input
              type='text'
              {...form.register("name")}
              placeholder='Enter Plan Name'
              id='plan-form-name'
              isError={!!form.formState.errors.name}
            />
            <ErrorMessage>{form.formState.errors.name?.message}</ErrorMessage>
          </div>
        </div>
        <div className='mb-1.25rem grid grid-cols-2 gap-1.25rem'>
          <div>
            <Label htmlFor='plan-form-duration'>Plan Duration</Label>
            <Input
              type='text'
              {...form.register("duration")}
              placeholder='Enter Plan Duration'
              id='plan-form-duration'
              isError={!!form.formState.errors.duration}
            />
            <ErrorMessage>{form.formState.errors.duration?.message}</ErrorMessage>
          </div>
          <div>
            <Label htmlFor='plan-form-minimumAmount'>Plan Minimum Amount</Label>
            <Input
              type='text'
              {...form.register("minimumAmount")}
              placeholder='Enter Plan Minimum Amount'
              id='plan-form-minimumAmount'
              isError={!!form.formState.errors.minimumAmount}
            />
            <ErrorMessage>{form.formState.errors.minimumAmount?.message}</ErrorMessage>
          </div>
        </div>

        <div className='mb-1.25rem'>
          <Label htmlFor='plan-form-feesMethod'>Plan Fees Method</Label>
          <Select
            {...form.register("feesMethod")}
            options={constantPlanFeesMethods}
            id='plan-form-feesMethod'
            isError={!!form.formState.errors.feesMethod}
          />
          <ErrorMessage>{form.formState.errors.feesMethod?.message}</ErrorMessage>
        </div>

        <div className='mb-1.25rem grid grid-cols-2 gap-1.25rem'>
          <div>
            <Label htmlFor='plan-form-bonusCoinType'>Plan bonus coin type</Label>
            <Input
              type='text'
              {...form.register("bonusCoinType")}
              placeholder='Enter Plan bonus coin type'
              id='plan-form-bonusCoinType'
              isError={!!form.formState.errors.bonusCoinType}
            />
            <ErrorMessage>{form.formState.errors.bonusCoinType?.message}</ErrorMessage>
          </div>
          <div>
            <Label htmlFor='plan-form-bonus'>Plan Bonus</Label>
            <Input
              type='text'
              {...form.register("bonus")}
              placeholder='Enter Plan Plan Bonus'
              id='plan-form-bonus'
              isError={!!form.formState.errors.bonus}
            />
            <ErrorMessage>{form.formState.errors.bonus?.message}</ErrorMessage>
          </div>
        </div>

        <div className='mb-1.25rem'>
          <Label htmlFor='plan-form-activationStatus'>Activation Status</Label>
          <Select
            {...form.register("activationStatus")}
            options={constantPlanActivationStatus}
            id='plan-form-activationStatus'
            isError={!!form.formState.errors.activationStatus}
          />
          <ErrorMessage>{form.formState.errors.activationStatus?.message}</ErrorMessage>
        </div>

        <div className='mb-1.25rem'>
          <Label htmlFor='plan-form-description'>Short Note</Label>
          <Textarea
            {...form.register("description")}
            id='plan-form-description'
            placeholder='Enter Short Note'
            isError={!!form.formState.errors.description}
          />
          <ErrorMessage>{form.formState.errors.description?.message}</ErrorMessage>
        </div>
      </ModalBody>
    </FormProvider>
  );
};

export default CreateAndEditPlanForm;
