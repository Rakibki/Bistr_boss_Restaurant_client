import React from "react";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="mt-16">
      <div className="w-3/12 mx-auto">
        <p className="mb-3 text-[#D99904] font-Inter text-center">---{subTitle}---</p>
        <h2 className="text-center py-2 border-y-2 font-Cinzel text-3xl font-semibold">{title}</h2>
      </div>
    </div>
  );
};

export default SectionTitle;
