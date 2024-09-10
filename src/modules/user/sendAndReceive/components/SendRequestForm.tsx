import ModalBody from "@/components/ModalBody";

import ModalFooter from "@/components/ModalFooter";

import ModalHeader from "@/components/ModalHeader";

import Select from "@/components/Select";

import useSendRequestForm from "../hooks/useSendRequestForm";

import {fakeDataWallets} from "@/fakeData";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import Input from "@/components/Input";

const SendRequest = () => {
  const {form, handleSubmit} = useSendRequestForm();

  return (
    <form noValidate name='send-request' id='send-request' onSubmit={handleSubmit}>
      <ModalHeader title='Send Request' />
      <ModalBody>
        <div className='mb-1.25rem'>
          <Label htmlFor='send-request-wallet'>Select Your Wallet</Label>
          <Select
            {...form.register("wallet")}
            options={fakeDataWallets}
            id='send-request-wallet'
            isError={!!form.formState.errors.wallet}
            defaultValue=''
          />
          <ErrorMessage>{form.formState.errors.wallet?.message}</ErrorMessage>
        </div>

        <div className='mb-1.25rem'>
          <Label htmlFor='send-request-amount'>Amount</Label>
          <Input
            type='text'
            {...form.register("amount")}
            placeholder='Enter amount'
            id='send-request-amount'
            isError={!!form.formState.errors.amount}
          />
          <ErrorMessage>{form.formState.errors.amount?.message}</ErrorMessage>
        </div>

        <div>
          <Label htmlFor='send-request-email'>User Email</Label>
          <Input
            type='email'
            {...form.register("email")}
            placeholder='Enter user email'
            id='send-request-email'
            isError={!!form.formState.errors.email}
          />
          <ErrorMessage>{form.formState.errors.email?.message}</ErrorMessage>
        </div>
      </ModalBody>
      <ModalFooter isLoading={false} title='Send Request' />
    </form>
  );
};

export default SendRequest;
