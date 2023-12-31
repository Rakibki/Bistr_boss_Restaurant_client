import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  AiFillContacts,
  AiFillHome,
  AiFillShop,
  AiOutlineShop,
} from "react-icons/ai";
import { FiHome, FiMenu, FiShoppingCart } from "react-icons/fi";
import useCard from "../../hooks/useCard";
import useAdmin from "../../hooks/useAdmin";

const DashbortLayout = () => {
  const [card] = useCard();
  const [isAdmin] = useAdmin()

  return (
    <div className="grid gap-4 grid-cols-12">
      <div className="col-span-3 bg-[#D1A054] min-h-screen">
        <div className="flex mt-4 ml-4 mb-4 flex-col">
          <h1 className="text-2xl -mb-2 uppercase font-Cinzel font-semibold">
            BISTRO BOSS
          </h1>
          <h1 style={{ letterSpacing: "7px" }} className="text-base uppercase">
            Restaurant
          </h1>
        </div>
        <ul className="p-6">
          {isAdmin ? (
            <>
              {/* ******* admin ralated route start ******* */}
              <li>
                <NavLink to={"/dashbort/adminHome"}>
                  {" "}
                  <div className="flex items-center gap-2">
                    <div>
                      {" "}
                      <AiFillHome className="text-2xl" />{" "}
                    </div>
                    <div>
                      <p className="text-lg mt-1 font-medium font-Inter">
                        Admin Home
                      </p>
                    </div>
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink to={"/dashbort/addItem"}>
                  {" "}
                  <div className="flex items-center gap-2">
                    <div>
                      {" "}
                      <AiFillHome className="text-2xl" />{" "}
                    </div>
                    <div>
                      <p className="text-lg mt-1 font-medium font-Inter">
                        Add Item
                      </p>
                    </div>
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink to={"/dashbort/manageItem"}>
                  {" "}
                  <div className="flex items-center gap-2">
                    <div>
                      {" "}
                      <AiFillHome className="text-2xl" />{" "}
                    </div>
                    <div>
                      <p className="text-lg mt-1 font-medium font-Inter">
                        Manage Item
                      </p>
                    </div>
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink to={"/dashbort/manageBookings"}>
                  {" "}
                  <div className="flex items-center gap-2">
                    <div>
                      {" "}
                      <AiFillHome className="text-2xl" />{" "}
                    </div>
                    <div>
                      <p className="text-lg mt-1 font-medium font-Inter">
                        Manage Bookings
                      </p>
                    </div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashbort/users"}>
                  {" "}
                  <div className="flex items-center gap-2">
                    <div>
                      {" "}
                      <AiFillHome className="text-2xl" />{" "}
                    </div>
                    <div>
                      <p className="text-lg mt-1 font-medium font-Inter">
                        All Users
                      </p>
                    </div>
                  </div>
                </NavLink>
              </li>
              {/* ******* admin ralated route start ******* */}
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashbort/paymentHistory"}>
                  {" "}
                  <div className="flex items-center gap-2">
                    <div>
                      {" "}
                      <AiFillHome className="text-2xl" />{" "}
                    </div>
                    <div>
                      <p className="text-lg mt-1 font-medium font-Inter">
                        Pyment History
                      </p>
                    </div>
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink to={"/dashbort/userHome"}>
                  {" "}
                  <div className="flex items-center gap-2">
                    <div>
                      {" "}
                      <AiFillHome className="text-2xl" />{" "}
                    </div>
                    <div>
                      <p className="text-lg mt-1 font-medium font-Inter">
                        User Home
                      </p>
                    </div>
                  </div>
                </NavLink>
              </li>

              <li className="mb-1">
                <NavLink to={"/dashbort/mycard"}>
                  {" "}
                  <div className="flex items-center gap-2">
                    <div>
                      {" "}
                      <FiShoppingCart className="text-2xl" />{" "}
                    </div>
                    <div>
                      <p className="text-lg mt-1 font-medium font-Inter">
                        My card <span className="text-sm">({card?.length})</span>
                      </p>
                    </div>
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink to={"/dashbort/myBooking"}>
                  {" "}
                  <div className="flex items-center gap-2">
                    <div>
                      {" "}
                      <AiFillHome className="text-2xl" />{" "}
                    </div>
                    <div>
                      <p className="text-lg mt-1 font-medium font-Inter">
                        My Bookings
                      </p>
                    </div>
                  </div>
                </NavLink>
              </li>
            </>
          )}

          <div className="divider">OR</div>

          <li className="mb-1">
            <NavLink to={"/"}>
              {" "}
              <div className="flex items-center gap-2">
                <div>
                  {" "}
                  <FiHome className="text-2xl" />{" "}
                </div>
                <div>
                  <p className="text-lg mt-1 font-medium font-Inter">Home</p>
                </div>
              </div>
            </NavLink>
          </li>

          <li className="mb-1">
            <NavLink to={"/menu"}>
              {" "}
              <div className="flex items-center gap-2">
                <div>
                  {" "}
                  <FiMenu className="text-2xl" />{" "}
                </div>
                <div>
                  <p className="text-lg mt-1 font-medium font-Inter">Menu</p>
                </div>
              </div>
            </NavLink>
          </li>

          <li className="mb-1">
            <NavLink to={"/shop"}>
              {" "}
              <div className="flex items-center gap-2">
                <div>
                  {" "}
                  <AiOutlineShop className="text-2xl" />{" "}
                </div>
                <div>
                  <p className="text-lg mt-1 font-medium font-Inter">Shop</p>
                </div>
              </div>
            </NavLink>
          </li>

          <li className="mb-1">
            <NavLink to={"/contact"}>
              {" "}
              <div className="flex items-center gap-2">
                <div>
                  {" "}
                  <AiFillContacts className="text-2xl" />{" "}
                </div>
                <div>
                  <p className="text-lg mt-1 font-medium font-Inter">Contact</p>
                </div>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="col-span-9">
        <Outlet />
      </div>
    </div>
  );
};

export default DashbortLayout;
