import React from "react";

const SingleFoodItem = ({ item }) => {
  return (
    <div className="bg-[#F3F3F3] shadow-xl">
      <figure>
        <img src={item.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-center">{item.name}</h2>
        <p>{item.recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodItem;
