import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SingleFoodItem from "../../components/SingleFoodItem";
import useMenu from "../../hooks/useMenu"

const ChefRecommends = () => {
  const [menu] = useMenu();

  return (
    <div>
      <SectionTitle subTitle={"Should Try"} title={"CHEF RECOMMENDS"} />

      <div className="mt-10 grid md:grid-cols-3 gap-4">
        {menu.slice(1, 4).map((item) => (
          <SingleFoodItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ChefRecommends;
