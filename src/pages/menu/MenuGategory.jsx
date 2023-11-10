import React from "react";
import Cover from "../shared/cover/Cover";
import MenuItem from "../../components/MenuItem";

import { Link } from "react-router-dom";

const MenuGategory = ({ items, image, title, desc }) => {
  return (
    <div>
      <Cover image={image} title={title} desc={desc} />

      <div className="grid grid-cols-2">
        {items.map((foodItem) => (
          <MenuItem item={foodItem} key={foodItem._id} />
        ))}
      </div>
      <div className="flex justify-center mb-4">
        <Link to={`/shop`}>
          <button className="px-6 py-2 border-b-4 text-[#1F2937] border-[#1F2937] rounded-lg">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuGategory;
