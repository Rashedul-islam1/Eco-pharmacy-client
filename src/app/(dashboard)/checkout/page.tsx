"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./compo/checkout";

const stripePromise = loadStripe(
  "pk_test_51OENiDC1pZIWKl2dyQZMu7IgHWIjFKOqUNS3eoMoLY7U7VohWXwnDVU7C3VrbOLOHT6qRLQmZqDKPRCkWHHO4Ru000AO98oaTu"
);
const Payment = () => {
  console.log(process.env.VITE_payment_Gateway_pk);
  return (
    <div>
      <Elements stripe={stripePromise}>
        <Checkout />
      </Elements>
    </div>
  );
};

export default Payment;
