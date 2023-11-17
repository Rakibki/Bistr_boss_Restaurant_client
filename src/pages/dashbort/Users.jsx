import React from "react";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Loadding from "../../pages/shared/loadding/Loadding";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaRegTrashAlt, FaUsers } from "react-icons/fa";
import swal from "sweetalert";

const Users = () => {
  const Axois = useAxios();

  const {
    isPending,
    refetch,
    error,
    data: users = [],
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => await Axois.get("/users").then((res) => res.data),
  });

  if (isPending) {
    return <Loadding />;
  }

  const handleDeleteUser = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        Axois.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleMakeAdmin = (user) => {
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        Axois.patch(`/users/admin/${user?._id}`);
        refetch();
        swal(`${user?.name} is an admin now!`, {
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <div className="w-full -mt-16 min-h-screen bg-[#F6F6F6]">
        <div className="p-10">
          <SectionTitle subTitle={"How many??"} title={"MANAGE ALL USERS"} />
          <div className="bg-white mt-3 p-6">
            <div className="flex mb-6 justify-between">
              <h1 className="text-3xl font-Inter">
                Total Users: {users?.length}
              </h1>
            </div>
            <div>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead className="bg-[#D1A054] font-semibold uppercase text-white px-4">
                    <tr>
                      <th>NAME</th>
                      <th>EMAIL</th>
                      <th>ROLE</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users?.map((item, index) => {
                      return (
                        <tr className="">
                          <td>
                            <p className="text-[#737373]">{item.name}</p>
                          </td>
                          <td>
                            <p className="text-[#737373]">{item.email}</p>
                          </td>
                          <td>
                            {" "}
                            {item?.role === "admin" ? (
                              "admin"
                            ) : (
                              <button
                                onClick={() => handleMakeAdmin(item)}
                                className="bg-[#D1A054] text-white btn text-2xl px-3 py-2"
                              >
                                <FaUsers />
                              </button>
                            )}
                          </td>
                          <th>
                            <button
                              onClick={() => handleDeleteUser(item._id)}
                              className="btn btn-ghost text-white bg-[#B91C1C]"
                            >
                              <FaRegTrashAlt />
                            </button>
                          </th>
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
    </div>
  );
};

export default Users;
