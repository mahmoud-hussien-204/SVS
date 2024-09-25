import Button from "@/components/Button";

import usePaymentMethodsForm from "../hooks/usePaymentMethodsForm";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import SwitchInput from "@/components/SwitchInput";

const PaymentMethodsForm = () => {
  const {form, handleSubmit} = usePaymentMethodsForm();

  return (
    <form
      noValidate
      id='payment-methods-settings-form'
      name='payment-methods-settings-form'
      onSubmit={handleSubmit}
    >
      <div className='mb-1.25rem grid grid-cols-3 gap-1.25rem'>
        <div className='flex gap-0.75rem'>
          <Label htmlFor='payment-methods-coinPayment'>Coin Payment</Label>
          <SwitchInput
            {...form.register("coinPayment")}
            id='payment-methods-coinPayment'
            isError={!!form.formState.errors.coinPayment}
          />
          <ErrorMessage>{form.formState.errors.coinPayment?.message}</ErrorMessage>
        </div>
        <div className='flex gap-0.75rem'>
          <Label htmlFor='payment-methods-bankDeposit'>Bank Deposit</Label>
          <SwitchInput
            {...form.register("bankDeposit")}
            id='payment-methods-bankDeposit'
            isError={!!form.formState.errors.bankDeposit}
          />
          <ErrorMessage>{form.formState.errors.bankDeposit?.message}</ErrorMessage>
        </div>
        <div className='flex gap-0.75rem'>
          <Label htmlFor='payment-methods-creditCard'>Credit card</Label>
          <SwitchInput
            {...form.register("creditCard")}
            id='payment-methods-creditCard'
            isError={!!form.formState.errors.creditCard}
          />
          <ErrorMessage>{form.formState.errors.creditCard?.message}</ErrorMessage>
        </div>
      </div>

      <div className='flex items-center gap-0.5rem'>
        <Button type='submit' className='min-w-[160px]' isLoading={false}>
          Save Changes
        </Button>
        <Button type='reset' className='btn-neutral min-w-[120px] text-white'>
          Reset
        </Button>
      </div>
    </form>
  );
};

export default PaymentMethodsForm;
