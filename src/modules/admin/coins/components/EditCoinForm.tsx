import ModalHeader from "@/components/ModalHeader";

import ModalFooter from "@/components/ModalFooter";

import useEditCoinForm from "../hooks/useEditCoinForm";

import ErrorMessage from "@/components/ErrorMessage";

import Input from "@/components/Input";

import Label from "@/components/Label";

import ModalBody from "@/components/ModalBody";

const EditCoinForm = () => {
  const {form, handleSubmit} = useEditCoinForm();

  return (
    <form noValidate name='update-coin-form' id='update-coin-form' onSubmit={handleSubmit}>
      <ModalHeader title='Update Coin' />
      <ModalBody>
        <div className='mb-1.25rem'>
          <Label htmlFor='update-coin-form-coin-name'>Coin Full Name</Label>
          <Input
            type='text'
            {...form.register("coinName")}
            placeholder='Enter Coin Full Name'
            id='update-coin-form-coin-name'
            isError={!!form.formState.errors.coinName}
          />
          <ErrorMessage>{form.formState.errors.coinName?.message}</ErrorMessage>
        </div>
        <div className='mb-1.25rem grid grid-cols-3 gap-1.25rem'>
          <div>
            <Label htmlFor='update-coin-form-fees'>Withdrawal fees (%)</Label>
            <Input
              type='text'
              {...form.register("withdrawalFees")}
              placeholder='Enter Withdrawal fees'
              id='update-coin-form-fees'
              isError={!!form.formState.errors.withdrawalFees}
            />
            <ErrorMessage>{form.formState.errors.withdrawalFees?.message}</ErrorMessage>
          </div>
          <div>
            <Label htmlFor='update-coin-form-minimum-withdrawal'>Minimum Withdrawal</Label>
            <Input
              type='email'
              {...form.register("minimumWithdrawal")}
              placeholder='Minimum Withdrawal
'
              id='update-coin-form-minimum-withdrawal'
              isError={!!form.formState.errors.minimumWithdrawal}
            />
            <ErrorMessage>{form.formState.errors.minimumWithdrawal?.message}</ErrorMessage>
          </div>
          <div>
            <Label htmlFor='update-coin-form-maximum-withdrawal'>Maximum Withdrawal</Label>
            <Input
              type='email'
              {...form.register("maximumWithdrawal")}
              placeholder='Maximum Withdrawal
'
              id='update-coin-form-maximum-withdrawal'
              isError={!!form.formState.errors.maximumWithdrawal}
            />
            <ErrorMessage>{form.formState.errors.maximumWithdrawal?.message}</ErrorMessage>
          </div>
        </div>
      </ModalBody>
      <ModalFooter isLoading={false} title='Update User' />
    </form>
  );
};

export default EditCoinForm;
