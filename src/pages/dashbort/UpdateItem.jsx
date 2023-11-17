import React from "react";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { MdOutlineFoodBank, MdUpdate } from "react-icons/md";
import { useForm } from "react-hook-form";
import useAxios from "../../hooks/useAxios"
import swal from "sweetalert"

const UpdateItem = () => {
  const menuItem = useLoaderData();
  const Axios = useAxios()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    Axios.patch(`/menu/${menuItem._id}`, data)
    .then((res) => {
      if(res.data.modifiedCount>0) {
        swal(`updated Successfully`);
      }
    })
  };

  return (
    <>
      <div className="-mt-10">
        <SectionTitle title={"UPDATE ITEM"} subTitle={"What's new"} />
      </div>
      <div className="w-[80%] p-10 mt-8 bg-[#F3F3F3] mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className=" text-base font-medium text-[#444]">
                Recipe name*
              </span>
            </label>
            <input
              {...register("name")}
              type="text"
              defaultValue={menuItem.name}
              placeholder="Type here"
              className="input bg-white input-bordered w-full"
            />
          </div>

          <div className="flex mt-4 gap-4">
            <div className="w-[50%]">
              <label className="label">
                <span className=" text-base font-medium text-[#444]">
                  Category*
                </span>
              </label>
              <select
                defaultValue={menuItem.category}
                {...register("category")}
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  Who shot first?
                </option>
                <option value={"dessert"}>Dessert</option>
                <option value={"salad"}>Salad</option>
                <option value={"soup"}>Soup</option>
                <option value={"pizza"}>pizza</option>
                <option value={"drinks"}>Drinks</option>
              </select>
            </div>

            <div className="form-control w-[50%]">
              <label className="label">
                <span className=" text-base font-medium text-[#444]">
                  Price*
                </span>
              </label>
              <input
                defaultValue={menuItem.price}
                {...register("Price")}
                type="text"
                placeholder="Type here"
                className="input bg-white input-bordered w-full"
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-medium text-[#444] mt-4">
                Recipe Details*
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details*"
              defaultValue={menuItem.recipe}
              {...register("RecipeDetails")}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r mt-6 flex mx-auto items-center from-[#835D23] gap-2 to-[#B58130] font-medium text-white font-Inter px-4 py-2 "
          >
            Update Menu Item <MdUpdate />
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateItem;
