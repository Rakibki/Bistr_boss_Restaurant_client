import React from "react";
import useCard from "../../hooks/useCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaRegTrashAlt } from "react-icons/fa";
import useAxios from "../../hooks/useAxios";

const MyCard = () => {
  const [card, refetch] = useCard();
  const totalPrice = card?.reduce((acc, curr) => acc + curr.foodPrice, 0);
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
        Axios.delete(`/cards/${id}`).then((res) => {
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

  return (
    <div className="w-full -mt-16 min-h-screen bg-[#F6F6F6]">
      <div className=" p-10">
        <SectionTitle subTitle={"My Cart"} title={"WANNA ADD MORE?"} />
        <div className="bg-white mt-3 p-6">
          <div className="flex mb-6 justify-between">
            <h1 className="text-3xl font-Inter">
              Total orders: {card?.length}
            </h1>
            <h1 className="text-3xl font-Inter">total price: {totalPrice}</h1>
            <h1>
              <button className=" px-3 py-2 font-medium font-Cinzel text-white bg-[#D1A054]">
                Pay
              </button>
            </h1>
          </div>
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="bg-[#D1A054] font-semibold uppercase text-white px-4">
                  <tr>
                    <th>ITEM IMAGE</th>
                    <th>ITEM NAME</th>
                    <th>PRICE</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {card?.map((item) => {
                    return (
                      <tr className="">
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
                          <p className="text-[#737373]">{item.foodName}</p>
                        </td>
                        <td className="text-[#737373]">${item.foodPrice}</td>
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

export default MyCard;
