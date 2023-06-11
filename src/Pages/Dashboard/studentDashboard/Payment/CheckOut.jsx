import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckOut = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();
    if(!stripe || !elements){
      return
    }

    const card = elements.getElement(CardElement);
console.log(card)
    if (card == null) {
      return
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if(error){
      console.log('error',error)
      setCardError(error.message)
    }
    else{
      setCardError('');
      console.log('payment method',paymentMethod)
    }


  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
     <div className="text-left mt-8">
     <button className="bg-blue-600 hover:bg-blue-700 px-6 font-bold py-2 rounded-md text-white" type="submit" disabled={!stripe}>
        Pay
      </button>
     </div>
    </form>
    <div>
      {cardError && <p className="text-red-600">{cardError}</p>}
    </div>
    </>
  );
};

export default CheckOut;