import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


const CheckOut = () => {
  const stripe = useStripe();
  const elements = useElements();

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
    }
    else{
      console.log('payment method',paymentMethod)
    }


  }

  return (
    <div>
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
    </div>
  );
};

export default CheckOut;