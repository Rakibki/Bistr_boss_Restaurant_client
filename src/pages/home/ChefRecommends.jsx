import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SingleFoodItem from "../../components/SingleFoodItem";

const ChefRecommends = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);

  return (
    <div>
      <SectionTitle subTitle={"Should Try"} title={"CHEF RECOMMENDS"} />

      <div className="mt-10 grid md:grid-cols-3 gap-4">
        {food.slice(1, 4).map((item) => (
          <SingleFoodItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ChefRecommends;
