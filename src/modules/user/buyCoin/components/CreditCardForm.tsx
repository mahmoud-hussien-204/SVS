import Input from "@/components/Input";

import Label from "@/components/Label";

import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  Elements,
  useStripe,
} from "@stripe/react-stripe-js";

import {loadStripe} from "@stripe/stripe-js";

import {useMemo} from "react";

interface IProps {
  readonly publishKey: string;
}

function CreditCardForm({publishKey}: IProps) {
  const stripePromise = useMemo(() => loadStripe(publishKey), [publishKey]);

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

export default CreditCardForm;

const CheckoutForm = () => {
  const options = useMemo(
    () => ({
      classes: {
        base: "px-1rem rounded rounded-1rem !text-white py-[1rem] border-base-200 border bg-base-300 text-white focus:outline-0",
        invalid: "border-error",
        focus: "!border-primary !text-white",
      },
      style: {
        base: {
          color: "#fff",
        },
      },
    }),
    []
  );

  const stripe = useStripe();

  console.log(stripe);

  return (
    <>
      <div className='mb-1.25rem'>
        <Label htmlFor='cardHolderName'>Card Holder Name</Label>
        <Input type='text' placeholder='Enter Card Holder Name' id='cardHolderName' />
      </div>

      <div className='grid grid-cols-4 gap-1.25rem'>
        <div className='col-span-2'>
          <Label>Card Number</Label>
          <CardNumberElement
            options={{
              showIcon: true,
              ...options,
            }}
            id='cardNumber'
          />
        </div>
        <div>
          <Label htmlFor='cardCvc'>CVC</Label>
          <CardCvcElement options={options} id='cardCvc' />
        </div>
        <div>
          <Label htmlFor='cardExpiry'>Expiration Date</Label>
          <CardExpiryElement options={options} id='cardExpiry' />
        </div>
      </div>
    </>
  );
};
