import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { MdOutlineFoodBank } from "react-icons/md";
import useAxiosLocal from "../../hooks/useAxiosLocal"
import axios from "axios"
import useAxios from "../../hooks/useAxios"
import swal from 'sweetalert';


const image_api = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HPSTING_KRY}`

const AddItem = () => {
  const axiosLocal = useAxiosLocal()
  const Axios = useAxios()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    const image =  data.image[0]
    const imageData = new FormData()
    imageData.append("image", image)
    const res = await axios.post(image_api, imageData)
    const imageUrl = res.data.data.display_url;

    const addedItemDate = {
      name: data.name,
      price: data.Price,
      image: imageUrl,
      category: data.category,
      recipe: data.recipe
    }
    Axios.post("/menu", addedItemDate)
    .then((res) => {
      if(res.data.insertedId) {
        swal("Menu Added successfully!");
      }
    })
  };

  return (
    <>
      <div className="-mt-10">
        <SectionTitle title={"ADD AN ITEM"} subTitle={"What's new"} />
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
                <span className=" text-base font-medium text-[#444]">Price*</span>
              </label>
              <input
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
              {...register("recipe")}
            ></textarea>
          </div>
          <input
            type="file"
            {...register("image")}
            className="border-none  bg-[#E8E8E8] mt-4 file-input-bordered w-full max-w-xs"
          />
          <button
            type="submit"
            className="bg-gradient-to-r mt-4 flex items-center from-[#835D23] gap-2 to-[#B58130] font-medium text-white font-Inter px-4 py-2 "
          >
            Add Item <MdOutlineFoodBank />
          </button>
        </form>
      </div>
    </>
  );
};

export default AddItem;
