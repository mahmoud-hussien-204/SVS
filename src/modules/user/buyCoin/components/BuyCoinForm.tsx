import ModalBody from "@/components/ModalBody";

import ModalFooter from "@/components/ModalFooter";

import ModalHeader from "@/components/ModalHeader";

import Select from "@/components/Select";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import Input from "@/components/Input";

import useBuyCoinForm from "../hooks/useBuyCoinForm";

import { constantBuyCoinPaymentType } from "../constants";

import { ENUM_BUY_COIN_PAYMENT_TYPE } from "../enums";

import CoinPaymentForm from "./CoinPaymentForm";

import BankDepositsForm from "./BankDepositsForm";

import CreditCardForm from "./CreditCardForm";

import { ICoin } from "../../wallets/interfaces";

const BuyCoinForm = ({ data }: IModalComponentProps) => {
  const { form, handleSubmit } = useBuyCoinForm();

  const paymentType = form.watch("payment_type")

  const renderPaymentForm = () => {
    switch (paymentType) {
      case ENUM_BUY_COIN_PAYMENT_TYPE.COIN_PAYMENT:
        return <CoinPaymentForm coins={data as ICoin[]} />
      case ENUM_BUY_COIN_PAYMENT_TYPE.BANK_DEPOSIT:
        return <BankDepositsForm />
      case ENUM_BUY_COIN_PAYMENT_TYPE.CREDIT_CARD:
        return <CreditCardForm />
    }
  }

  return (
    <form noValidate name='buy-coin' id='buy-coin' onSubmit={handleSubmit}>
      <ModalHeader title='Buy Coin' />
      <ModalBody>
        <div className='mb-1.25rem'>
          <Label htmlFor='send-request-amount'>Amount</Label>
          <Input
            type='text'
            {...form.register("coin")}
            placeholder='Enter Coin Amount'
            id='send-request-amount'
            isError={!!form.formState.errors.coin}
          />
          <ErrorMessage>{form.formState.errors.coin?.message}</ErrorMessage>
        </div>

        <div className='mb-1.25rem'>
          <Label htmlFor='send-request-wallet'>Select Payment Type</Label>
          <Select
            {...form.register("payment_type")}
            options={constantBuyCoinPaymentType}
            id='send-request-wallet'
            isError={!!form.formState.errors.payment_type}
            defaultValue=''
          />
          <ErrorMessage>{form.formState.errors.payment_type?.message}</ErrorMessage>
        </div>

        {renderPaymentForm()}
      </ModalBody>
      <ModalFooter isLoading={false} title='Send Request' />
    </form>
  );
};

export default BuyCoinForm;
