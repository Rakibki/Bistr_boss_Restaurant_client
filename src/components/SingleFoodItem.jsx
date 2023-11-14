import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import swal from "sweetalert";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import useCard from "../hooks/useCard";

const SingleFoodItem = ({ item }) => {
  const [, refetch] = useCard();
  const Axios = useAxios();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCard = (food) => {
    if (user && user.email) {
      const odderData = {
        foodId: food._id,
        name: user.displayName,
        email: user.email,
        foodName: food.name,
        foodPrice: food.price,
        image: food.image
      };

      Axios.post("/cards", odderData)
        .then((res) => {
          console.log(res);
          if (res.data.insertedId) {
            swal("Good job!", `${food.name} card to your Card`, "success");
            refetch();
          }
        })
        .catch((e) => console.log(e));
    } else {
      swal({
        title: "Your are not logged in",
        text: "Please login to add to then card",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          navigate("/login", { state: location.pathname });
        }
      });
    }
  };

  return (
    <div className="bg-[#F3F3F3] shadow-xl">
      <div className="h-[200px] relative w-full">
        <img className="w-full h-full" src={item.image} alt="Shoes" />
        <div className="absolute bg-[#151515] text-white font-semibold rounded-md px-3 py-2 top-4 right-4">
          ${item.price}
        </div>
      </div>
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-center">{item.name}</h2>
        <p className="text-sm text-center text-[#151515]">{item.recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddToCard(item)}
            className="px-6 py-2 transition-all uppercase mt-4 rounded-md border-b-2 hover:border-b-0 font-Inter font-medium border-[#BB8506] hover:bg-[#1F2937] text-[#BB8506]"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodItem;
