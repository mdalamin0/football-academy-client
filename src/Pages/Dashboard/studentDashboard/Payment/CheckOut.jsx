import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckOut = ({ price, singleClass }) => {
  const {_id, class_name, image} = singleClass;
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/createPaymentIntent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, []);

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

    setProcessing(true);

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
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
console.log(paymentIntent)
    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // save payment information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        classId: _id,
        class_name: class_name,
        image: image
      }
      axiosSecure.post('/payments', payment)
      .then(res => {
        console.log(res.data.insertResult.insertedId)
        if(res.data.insertResult.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully Added",
            showConfirmButton: false,
            timer: 1500,
          })
        }
        card.clear()
      })
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
         className="border-2 py-2 px-4 rounded-md"
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
            disabled={!stripe || !clientSecret || processing }
          >
            Pay
          </button>
        </div>
      </form>
      <div>{cardError && <p className="text-red-600">{cardError}</p>}</div>
      <div>
        {transactionId && (
          <p className="text-green-600">Transaction Complete </p>
        )}
      </div>
    </>
  );
};

export default CheckOut;
