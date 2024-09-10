import ModalBody from "@/components/ModalBody";

import ModalFooter from "@/components/ModalFooter";

import ModalHeader from "@/components/ModalHeader";

import useWithdrawForm from "../hooks/useWithdrawForm";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import Input from "@/components/Input";

import Textarea from "@/components/Textarea";

const WithdrawForm = () => {
  const {form, handleSubmit} = useWithdrawForm();

  return (
    <form noValidate name='withdraw-form' id='withdraw-form' onSubmit={handleSubmit}>
      <ModalHeader title='Withdraw' />
      <ModalBody>
        <div className='mb-1.25rem'>
          <Label htmlFor='withdraw-form-wallet-address'>Wallet Address</Label>
          <Input
            type='text'
            {...form.register("walletAddress")}
            placeholder='Enter wallet address'
            id='withdraw-form-wallet-address'
            isError={!!form.formState.errors.walletAddress}
          />
          <ErrorMessage>{form.formState.errors.walletAddress?.message}</ErrorMessage>
        </div>
        <div className='mb-1.25rem'>
          <Label htmlFor='withdraw-form-amount'>Amount</Label>
          <Input
            type='text'
            {...form.register("amount")}
            placeholder='Enter amount'
            id='withdraw-form-amount'
            isError={!!form.formState.errors.amount}
          />
          <ErrorMessage>{form.formState.errors.amount?.message}</ErrorMessage>
        </div>
        <div className='mb-1.25rem'>
          <Label htmlFor='withdraw-form-comment'>Note</Label>
          <Textarea
            {...form.register("comment")}
            placeholder='Type your message here'
            id='withdraw-form-comment'
            isError={!!form.formState.errors.comment}
          />
          <ErrorMessage>{form.formState.errors.comment?.message}</ErrorMessage>
        </div>
      </ModalBody>
      <ModalFooter isLoading={false} title='Withdraw' />
    </form>
  );
};

export default WithdrawForm;
