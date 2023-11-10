import React from "react";
import SingleFoodItem from "../SingleFoodItem";

const TabPanelItems = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((food) => (
        <SingleFoodItem key={food._id} item={food} />
      ))}
    </div>
  );
};

export default TabPanelItems;
