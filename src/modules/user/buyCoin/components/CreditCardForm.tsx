import Button from "@/components/Button";

import Input from "@/components/Input";

import Label from "@/components/Label";

import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import {loadStripe} from "@stripe/stripe-js";

import {useMemo, useRef} from "react";

import {useFormContext} from "react-hook-form";

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

  const elements = useElements();

  const submitRefBtn = useRef<HTMLButtonElement>(null);

  const {setValue} = useFormContext();

  const handleStripeSubmit = async () => {
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    if (!cardElement) {
      console.error("Card element not found");
      return;
    }

    const {token, error} = await stripe.createToken(cardElement);

    if (error) {
      console.error("Error creating token:", error.message);
    } else {
      console.log("Token created:", token);
      setValue("stripeToken", token?.id);
      submitRefBtn.current?.click();
    }
  };

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

      <Button
        type='button'
        className='mt-1.25rem min-w-[150px]'
        isLoading={false}
        onClick={handleStripeSubmit}
      >
        Buy Now
      </Button>

      <button type='submit' ref={submitRefBtn} className='hidden'></button>
    </>
  );
};
