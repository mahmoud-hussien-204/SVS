import ModalHeader from "@/components/ModalHeader";

import ModalFooter from "@/components/ModalFooter";

import useEditBankForm from "../hooks/useEditBankForm";

import ErrorMessage from "@/components/ErrorMessage";

import Input from "@/components/Input";

import Label from "@/components/Label";

import ModalBody from "@/components/ModalBody";

const EditBankForm = () => {
  const {form, handleSubmit} = useEditBankForm();

  return (
    <form
      noValidate
      name='edit-bank-account-form'
      id='edit-bank-account-form'
      onSubmit={handleSubmit}
    >
      <ModalHeader title='Update Bank' />
      <ModalBody>
        <div className='mb-1.25rem'>
          <Label htmlFor='edit-bank-account-form-holderName'>Account Holder Name</Label>
          <Input
            type='text'
            {...form.register("holderName")}
            placeholder='Enter Account Holder Name'
            id='edit-bank-account-form-holderName'
            isError={!!form.formState.errors.holderName}
          />
          <ErrorMessage>{form.formState.errors.holderName?.message}</ErrorMessage>
        </div>
      </ModalBody>
      <ModalFooter isLoading={false} title='Update Bank' />
    </form>
  );
};

export default EditBankForm;
