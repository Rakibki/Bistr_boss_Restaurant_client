import React from "react";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaEdit, FaRegTrashAlt, FaUsers } from "react-icons/fa";
import swal from "sweetalert";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router-dom";
import Loadding from "../../pages/shared/loadding/Loadding"

const ManageItem = () => {
  const [menu, loadding , refetch] = useMenu();
  const Axios = useAxios();

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        Axios.delete(`/menu/${id}`).then((res) => {
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

  if(loadding) {
    return <Loadding />
  }

  return (
    <div className="w-full -mt-16 min-h-screen bg-[#F6F6F6]">
      <div className=" p-10">
        <SectionTitle subTitle={"Hurry Up!"} title={"MANAGE ALL ITEMS"} />
        <div className="bg-white mt-3 p-6">
          <div className="flex mb-6 justify-between">
            <h1 className="text-3xl font-Inter">Total Menus: {menu?.length}</h1>
          </div>
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="bg-[#D1A054] font-semibold uppercase text-white px-4">
                  <tr>
                    <th>#</th>
                    <th>ITEM IMAGE</th>
                    <th>ITEM NAME</th>
                    <th>PRICE</th>
                    <th>ACTION</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {menu?.map((item, index) => {
                    return (
                      <tr className="">
                        <td>{index + 1}</td>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask  w-16 h-16">
                                <img src={item?.image} />
                              </div>
                            </div>
                            <div></div>
                          </div>
                        </td>
                        <td>
                          <p className="text-[#737373]">{item.name}</p>
                        </td>
                        <td className="text-[#737373]">${item.price}</td>
                        <th>
                          <Link to={`/dashbort/updateItem/${item._id}`}>
                            <button className="bg-[#D1A054] text-white btn text-2xl px-3 py-2">
                              <FaEdit />
                            </button>
                          </Link>
                        </th>
                        <th>
                          <button
                            onClick={() => handleDelete(item._id)}
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
  );
};

export default ManageItem;
