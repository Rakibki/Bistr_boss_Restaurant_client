import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaRegTrashAlt } from "react-icons/fa";

const PaymentHistry = () => {
  const { user } = useContext(AuthContext);
  const Axios = useAxios();

  const { isPending, error, data } = useQuery({
    queryKey: ["my_payment_history"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await Axios.get(`/paymentHistory/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div className="w-full -mt-16 min-h-screen bg-[#F6F6F6]">
      <div className=" p-10">
        <SectionTitle subTitle={"At a Glance"} title={"PAYMENT HISTORY?"} />
        <div className="bg-white mt-3 p-6">
          <div className="flex mb-6 justify-between">
            <h1 className="text-3xl font-Inter">
              Total Payments: {data?.length}
            </h1>
          </div>
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="bg-[#D1A054] font-semibold uppercase text-white px-4">
                  <tr>
                    <th>EMAIL</th>
                    <th>CATEGORY</th>
                    <th>TOTAL PRICE</th>
                    <th>PAYENT DATE</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item) => {
                    return (
                      <tr className="">
                        <td>
                          <p>{item.email}</p>
                        </td>
                        <td>
                          <p className="text-[#737373]">Food Order</p>
                        </td>
                        <td className="text-[#737373]">${item.price}</td>
                        <td>
                          {/* <p>{new Date()}</p> */}
                          <p>01/04.2023</p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistry;
