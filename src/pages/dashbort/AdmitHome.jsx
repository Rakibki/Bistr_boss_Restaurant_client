import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { AuthContext } from "../../providers/AuthProvider";
import { BsCalendarEvent } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { GiFoodTruck } from "react-icons/gi";

const AdmitHome = () => {
  const Axios = useAxios();
  const { user } = useContext(AuthContext);

  const { data, isPending } = useQuery({
    queryKey: ["admin stats"],
    queryFn: async () => {
      const res = await Axios.get("/admin-stats");
      return res.data;
    },
  });

  return (
    <div className="mt-6 px-10">
      <h1 className="text-3xl font-Cinzel font-semibold">
        Hi, Welcome {user?.displayName}!
      </h1>

      <div className="grid gap-2 mt-6 grid-cols-4">
        <div className="flex bg-gradient-to-r text-white from-[#BB34F5] to-[#FCDBFF] px-6 py-4 items-center gap-3">
          <BsCalendarEvent className="text-4xl" />
          <div>
            <h1 className="text-4xl font-bold">{data?.revenue}</h1>
            <h1 className="text-2xl font-bold">Revenue</h1>
          </div>
        </div>

        <div className="flex bg-gradient-to-r text-white from-[#D3A256] to-[#FDE8C0] px-6 py-4 items-center gap-3">
          <FaUsers className="text-4xl" />
          <div>
            <h1 className="text-4xl font-bold">{data?.users}</h1>
            <h1 className="text-2xl font-bold">Customers</h1>
          </div>
        </div>

        <div className="flex bg-gradient-to-r text-white from-[#FE4880] to-[#FECDE9] px-6 py-4 items-center gap-3">
          <GiFoodTruck className="text-4xl" />
          <div>
            <h1 className="text-4xl font-bold">{data?.menus}</h1>
            <h1 className="text-2xl font-bold">Menus</h1>
          </div>
        </div>

        <div className="flex bg-gradient-to-r text-white from-[#6AAEFF] to-[#B6F7FF] px-6 py-4 items-center gap-3">
          <GiFoodTruck className="text-4xl" />
          <div>
            <h1 className="text-4xl font-bold">{data?.menus}</h1>
            <h1 className="text-2xl font-bold">Oders</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmitHome;
