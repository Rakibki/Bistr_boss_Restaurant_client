import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useCard from "../../hooks/useCard";
import useAxios from "../../hooks/useAxios";
import { AuthContext } from "../../providers/AuthProvider";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [trangectionId, setTrangectionId] = useState("");
  const [myCard, refetch] = useCard();
  const Axios = useAxios();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useContext(AuthContext);
  const naviagte = useNavigate()


  const totalPrice = myCard?.reduce((acc, curr) => acc + curr.foodPrice, 0);
  useEffect(() => {
    if (totalPrice) {
      Axios.post("/create-payment-intent", { price: totalPrice }).then(
        (res) => {
          setClientSecret(res.data.clientSecret);
        }
      );
    }
  }, [totalPrice, Axios]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });

    if (confirmError) {
      console.log("payment, error", confirmError);
    } else {
      if (paymentIntent.status === "succeeded") {
        setTrangectionId(paymentIntent.id);


        const payment = {
          name: user?.displayName,
          email: user?.email,
          price: totalPrice,
          date: new Date(),
          cardIds: myCard?.map((item) => item?._id),
          menuIds: myCard?.map((item) => item?.foodId),
          status: "padding",
          trangectionId: trangectionId,
        };

        Axios.post("/payment", payment).then((res) => {
          if(res?.data?.paymentREsult?.insertedId){
            swal("Good job!", "You clicked the button!", "success");
            refetch()
            naviagte("/dashbort/paymentHistory")
          }
        });
      }
    }
  };

  return (
    <div className="p-10 bg-[red] w-[50%]">
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
        <div className="flex justify-center mt-6">
          <button
            className="btn w-[50%] mx-auto btn-primary"
            type="submit"
            disabled={!stripe}
          >
            Pay
          </button>
        </div>
      </form>
      {error && (
        <>
          <p className="text-red-600 mt-2">{error}</p>
        </>
      )}
    </div>
  );
};

export default CheckoutForm;
