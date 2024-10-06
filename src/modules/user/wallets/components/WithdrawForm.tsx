import ModalBody from "@/components/ModalBody";

import ModalFooter from "@/components/ModalFooter";

import ModalHeader from "@/components/ModalHeader";

import useWithdrawForm from "../hooks/useWithdrawForm";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import Input from "@/components/Input";

import Textarea from "@/components/Textarea";

import Note from "@/components/Note";

import WithLoading from "@/components/WithLoading";

const WithdrawForm = () => {
  const {form, handleSubmit, isPending, walletDetails, isLoading} = useWithdrawForm();

  return (
    <form noValidate name='withdraw-form' id='withdraw-form' onSubmit={handleSubmit}>
      <ModalHeader title='Withdraw' />
      <ModalBody>
        <WithLoading isLoading={isLoading}>
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
            <Note>
              Warning : Please input your {walletDetails?.wallet?.name} Coin address carefully.
              Because of wrong address if coin is lost, we will not responsible for that.
            </Note>
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
            <Note>
              Minimum withdrawal amount: {walletDetails?.wallet?.minimum_withdrawal}{" "}
              {walletDetails?.wallet?.name} - Maximum withdrawal amount:{" "}
              {walletDetails?.wallet?.maximum_withdrawal} {walletDetails?.wallet?.name}
            </Note>
          </div>

          {walletDetails && walletDetails["2fa_enabled"] && (
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
          )}

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
        </WithLoading>
      </ModalBody>
      <ModalFooter isLoading={isPending} title='Withdraw' />
    </form>
  );
};

export default WithdrawForm;
