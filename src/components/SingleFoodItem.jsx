import React from "react";

const SingleFoodItem = ({ item }) => {
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
          <button className="px-6 py-2 transition-all uppercase mt-4 rounded-md border-b-2 hover:border-b-0 font-Inter font-medium border-[#BB8506] hover:bg-[#1F2937] text-[#BB8506]">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodItem;
