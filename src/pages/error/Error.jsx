import React from "react";
import error from "../../assets/404.gif";
import { IoMdHome } from "react-icons/io";
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-[50%] mx-auto">
        <img src={error} alt="" />
      </div>
      <Link to="/">
        <button className="bg-gradient-to-r mx-auto flex items-center from-[#835D23] gap-2 to-[#B58130] font-medium text-white font-Inter px-4 py-2 ">
          Back To Home <IoMdHome className="text-lg" />
        </button>
      </Link>
    </div>
  );
};

export default Error;
