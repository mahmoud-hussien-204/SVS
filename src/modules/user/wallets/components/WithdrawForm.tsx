import ModalBody from "@/components/ModalBody";

import ModalFooter from "@/components/ModalFooter";

import ModalHeader from "@/components/ModalHeader";

import useWithdrawForm from "../hooks/useWithdrawForm";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import Input from "@/components/Input";

import Textarea from "@/components/Textarea";
import { IWallet } from "../interfaces";
import { useEffect } from "react";

const WithdrawForm = ({ data }: IModalComponentProps) => {
  const { form, handleSubmit, isPending } = useWithdrawForm();
  const walletData = data as IWallet

  useEffect(() => {
    if (!walletData) return
    form.setValue("wallet_id", walletData.id)
  }, [walletData, form])

  return (
    <form noValidate name='withdraw-form' id='withdraw-form' onSubmit={handleSubmit}>
      <ModalHeader title='Withdraw' />
      <ModalBody>
        <div className='mb-1.25rem'>
          <Label htmlFor='withdraw-form-wallet-address'>Wallet Address</Label>
          <Input
            type='text'
            {...form.register("address")}
            placeholder='Enter wallet address'
            id='withdraw-form-wallet-address'
            isError={!!form.formState.errors.address}
          />
          <ErrorMessage>{form.formState.errors.address?.message}</ErrorMessage>
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
          <Label htmlFor='withdraw-form-amount'>2FA Code</Label>
          <Input
            type='text'
            {...form.register("code")}
            placeholder='Enter amount'
            id='withdraw-form-amount'
            isError={!!form.formState.errors.code}
          />
          <ErrorMessage>{form.formState.errors.code?.message}</ErrorMessage>
        </div>
        <div className='mb-1.25rem'>
          <Label htmlFor='withdraw-form-comment'>Note</Label>
          <Textarea
            {...form.register("message")}
            placeholder='Type your message here'
            id='withdraw-form-comment'
            isError={!!form.formState.errors.message}
          />
          <ErrorMessage>{form.formState.errors.message?.message}</ErrorMessage>
        </div>
      </ModalBody>
      <ModalFooter isLoading={isPending} title='Withdraw' />
    </form>
  );
};

export default WithdrawForm;
