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

  const options = {
    // passing the client secret obtained from the server
    // clientSecret: "{{CLIENT_SECRET}}",
  };

  // const form = useFormContext<ICreditCardForm>();

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
}

export default CreditCardForm;

const CheckoutForm = () => {
  const s = useStripe();

  return (
    <div>
      <div className='mb-1.25rem'></div>

      <div className='mb-1.25rem'>
        <Label>Card Number</Label>
        <CardNumberElement
          options={{
            showIcon: true,
            placeholder: "Enter card number",
            classes: {
              base: "text-16 input input-bordered !h-3rem w-full rounded-0.5rem border-base-200 bg-base-300 text-white placeholder:text-14 placeholder:text-neutral-500 focus:border-primary focus:outline-0",
              invalid: "border-error",
            },
          }}
          id='cardNumber'
        />
      </div>

      <div className='grid grid-cols-2 gap-1.25rem'>
        <CardCvcElement options={{}} id='cardCvc' />
        <CardExpiryElement options={{}} id='cardExpiry' />
      </div>
    </div>
  );
};
