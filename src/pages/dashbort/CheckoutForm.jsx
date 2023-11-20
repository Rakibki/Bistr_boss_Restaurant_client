// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import React, { useEffect, useState } from "react";
// import useCard from "../../hooks/useCard";
// import useAxiosLocal from "../../hooks/useAxiosLocal";

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState("");
//   const [card] = useCard();
//   const axiosLocal = useAxiosLocal();
//   const [clientSecret, setClientSecret] = useState("");
//   const totalPrice = card?.reduce((acc, curr) => acc + curr.foodPrice, 0);

//   useEffect(() => {
//     axiosLocal
//       .post("/create-payment-intent", { price: totalPrice })
//       .then((res) => {
//         setClientSecret(res.data.clientSecret);
//       });
//   }, [totalPrice, axiosLocal]);

//   console.log(clientSecret);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const card = elements.getElement(CardElement);

//     if (card == null) {
//       return;
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card,
//     });

//     if (error) {
//       console.log(error);
//       setError(error.message);
//     } else {
//       console.log(paymentMethod);
//       setError("");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement
//         options={{
//           style: {
//             base: {
//               fontSize: "16px",
//               color: "#424770",
//               "::placeholder": {
//                 color: "#aab7c4",
//               },
//             },
//             invalid: {
//               color: "#9e2146",
//             },
//           },
//         }}
//       />
//       <button
//         className="btn btn-primary w-[50%] mt-6"
//         type="submit"
//         disabled={!stripe}
//       >
//         Pay
//       </button>
//     </form>
//   );
// };

// export default CheckoutForm;
