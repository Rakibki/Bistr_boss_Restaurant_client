import React from "react";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPRE_PUBLISHBLE_KEY);

const Payment = () => {
    
  return (
    <>
      <Elements>
        <CheckoutForm stripe={stripePromise} />
      </Elements>
    </>
  );
};

export default Payment;
