import "./App.css";
import { Location, useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./components/CheckoutForm";

const stripePromise = loadStripe("pk_test_votreCléPublique");

const Payment = () => {
  const location = useLocation;
  const { id, title, price } = location.state;
  console.log(id);
  return (
    <Elements stripe={stripePromise}>
      console.log({state.price})
      <CheckoutForm props={props} />
    </Elements>
  );
};

export default Payment;
