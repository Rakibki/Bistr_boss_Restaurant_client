import React from "react";
import "./style.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import FeaturedImage from "../../assets/home/featured.jpg";

const FeaturedFood = () => {
  return (
    <div className="p-16" id="featured-food">
      <SectionTitle subTitle={"---Check it out---"} title={"FROM OUR MENU"} />

      <div className="mt-16 flex gap-4">
        <div className="flex-1">
          <img className="w-[450px] mx-auto" src={FeaturedImage} alt="" />
        </div>
        <div className="flex-1 bg-black p-10 bg-opacity-25 shadow-2xl text-white">
          <p className="text-lg font-Inter">March 20, 2023</p>
          <h2 className="uppercase font-semibold text-xl mt-2 mb-3">
            WHERE CAN I GET SOME?
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="px-6 hover:bg-[#fff] hover:text-black font-Inter mt-2 transition-all py-2 border-b-4 rounded-xl border-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFood;
