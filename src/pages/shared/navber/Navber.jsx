import React, { useContext } from "react";
import shop from "../../../assets/icon/shop.png";
import Frame from "../../../assets/icon/Frame.svg";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import Dropdown from "./Dropdown";
import { FiShoppingCart } from "react-icons/fi";
import useCard from "../../../hooks/useCard";
import { AuthContext } from "../../../providers/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";

const Navber = () => {
  const [card] = useCard();
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();


  const navItems = (
    <div className="flex gap-6">
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#EEFF25] uppercase font-semibold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/menu"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#EEFF25] uppercase font-semibold"
              : ""
          }
        >
          OUR MENU
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/shop"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#EEFF25] uppercase font-semibold"
              : ""
          }
        >
          OUR SHOP
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#EEFF25] uppercase font-semibold"
              : ""
          }
        >
          CONTACT US
        </NavLink>
      </li>
    </div>
  );

  return (
    <div className="navbar bg-opacity-70 mx-auto max-w-7xl px-16 text-white fixed py-4 top-0 z-40 bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <AiOutlineMenu className="text-white text-3xl" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-black shadow bg-base-100 rounded-box w-auto"
          >
            {navItems}
          </ul>
        </div>
        <Link to={"/"}>
          <div className="flex flex-col">
            <h1 className="text-2xl -mb-2 uppercase font-Cinzel font-semibold">
              BISTRO BOSS
            </h1>
            <h1
              style={{ letterSpacing: "7px" }}
              className="text-base uppercase"
            >
              Restaurant
            </h1>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end space-x-2">
        <div className="w-16">
          <img src={shop} alt="" />
        </div>
        <Link to={"/login"}>
          <p className="font-semibold text-white">SING IN</p>
        </Link>
        <div className="dropdown dropdown-bottom dropdown-end">
          <img tabIndex={0} className="m-1" src={Frame} alt="" />
          <Dropdown />
        </div>
        <div className="ml-9  relative">
          <div className="badge bg-[#D99904] absolute -top-3 left-0 border-none text-white ml-3 badge-secondary">
            {card?.length}
          </div>
          {user && isAdmin ? (
            <NavLink to={"/dashbort/adminHome"}>
              <FiShoppingCart className="text-2xl" />
            </NavLink>
          ) : (
            <NavLink to={"/dashbort/userHome"}>
              <FiShoppingCart className="text-2xl" />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
