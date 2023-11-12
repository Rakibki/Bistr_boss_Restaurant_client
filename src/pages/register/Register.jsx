import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import LoginImage from "../../assets/others/authentication1.png";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"
import swal from 'sweetalert';


const Register = () => {
  const { createUser, updaetUserProfile } = useContext(AuthContext);

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((res) => {
        console.log(res);
        updaetUserProfile(data.name, data.image);
        swal("Good job!", "User Create Successfully", "success");
        navigate("/")
      })
      .catch((e) => console.log(e.massege));
  };

  console.log(errors);

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col md:flex-row">
        <div className="text-center w-[90%] md:w-[50%] lg:text-left">
          <img src={LoginImage} alt="" />
        </div>

        <div className="card flex-shrink-0  w-[90%]  md:w-[50%]">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                name="name"
                {...register("name", { required: true })}
              />
              {errors?.name && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                {...register("email", { required: true })}
              />
              {errors?.email && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo"
                className="input input-bordered"
                name="image"
                {...register("image", { required: true })}
              />
              {errors?.email && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                {...register("password", {
                  required: true,
                  maxLength: 20,
                  minLength: 6,
                })}
              />
              {errors?.password && <span>This field is required</span>}
              {errors?.password?.type == "pattern" && (
                <span>akta special carek tar dite hojme</span>
              )}
              {errors?.password?.type == "mi FnLength" && (
                <span>tomake 6 ar othiik pass dite home</span>
              )}
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className=" hover:opacity-70 py-3 bg-[#d1a054b3] text-white border-none font-semibold"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
