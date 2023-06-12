import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const CheckOut = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const {user} = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    if(price > 0){
      axiosSecure.post('/createPaymentIntent', {price }).then((res) => {
        console.log(res.data)
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    console.log(card);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("payment method", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment( clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displayName || 'anonymous'
          },
        },
      });
      if(confirmError){
        console.log(confirmError)
      }
      console.log(paymentIntent)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="text-left mt-8">
          <button
            className="bg-blue-600 hover:bg-blue-700 px-6 font-bold py-2 rounded-md text-white"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
      </form>
      <div>{cardError && <p className="text-red-600">{cardError}</p>}</div>
    </>
  );
};

export default CheckOut;
