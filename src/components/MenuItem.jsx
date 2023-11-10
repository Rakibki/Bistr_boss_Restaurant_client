import React from "react";

const MenuItem = ({ item }) => {
  return (
    <div className="flex gap-3">
      <div className=" h-[100px] w-[100px]">
        <img
          className="w-full h-full"
          style={{ borderRadius: "0 200px 200px 200px" }}
          src={item.image}
          alt=""
        />
      </div>
      <div className="">
        <div className="flex justify-between">
          <h2 className="text-3xl font-Cinzel text-[#151515]">{item.name}-------------</h2>
          <h2 className="text-[#BB8506] text-2xl font-bold">${item.price}</h2>
        </div>
        <p className="text-[#737373] text-lg">{item.recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
