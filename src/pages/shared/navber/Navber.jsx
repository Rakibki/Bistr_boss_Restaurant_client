import React from "react";
import shop from "../../../assets/icon/shop.png";
import Frame from "../../../assets/icon/Frame.svg";
import { NavLink } from "react-router-dom";

const Navber = () => {
  const navItems = (
    <div className="flex gap-3">
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
    </div>
  );

  return (
    <div className="navbar bg-opacity-70 text-white fixed z-40 bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <div>logo</div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="w-16">
          <img src={shop} alt="" />
        </div>
        <p className="font-semibold text-white">SING IN</p>
        <div>
          <img src={Frame} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navber;
