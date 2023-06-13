import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const singleClass = useLoaderData();
  const {price} = singleClass;
  const priceNumber = parseFloat(price)
  console.log(priceNumber)
  
  return (
    <div className="p-8 md:w-2/3 lg:w-1/2 mx-auto mt-12 border-2 shadow-md rounded-md">
      <h3 className="text-2xl font-semibold mb-12"> Payment Carefully...</h3>
     <Elements stripe={stripePromise}>
     <CheckOut price={priceNumber} singleClass={singleClass}></CheckOut>
     </Elements>
    </div>
  );
};

export default Payment;