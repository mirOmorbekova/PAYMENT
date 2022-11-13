import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51M1Fu7Fewf7Q7W2cLpyE5lLaTdReI3KDhAzrcTSE9Jl1Ktmh3wvwqDMM2SWruqEc1UxiCgs5iqb9KsWpcQexMzqF00W1KALbJ6";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;