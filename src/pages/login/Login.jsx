import React, { useContext, useEffect, useRef, useState } from "react";
import LoginImage from "../../assets/others/authentication1.png";
// import {
//   loadCaptchaEnginge,
//   LoadCanvasTemplate,
//   validateCaptcha,
// } from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";
import {useLocation, useNavigate} from "react-router-dom"

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()

  // const captcha_value = useRef();
  // const [disabled, setDisabled] = useState(true);


  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((res) => {
        console.log(res);
        swal("Good job!", "Login successfull", "success");
        navigate(location.state ? location.state : "/")
      })
      .catch((e) => console.log(e.message));
  };

  // const handleChatchaChane = (e) => {
  //   const value = captcha_value.current.value;

  //   if (validateCaptcha(value) == true) {
  //     setDisabled(false);
  //     console.log("chap");
  //   } else {
  //     setDisabled(true);
  //   }
  // };

  // useEffect(() => {
  //   loadCaptchaEnginge(6);
  // }, []);

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col md:flex-row">
        <div className="text-center w-[90%] md:w-[50%] lg:text-left">
          <img src={LoginImage} alt="" />
        </div>

        <div className="card flex-shrink-0  w-[90%]  md:w-[50%]">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
              />
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
              />
            </div>

            {/* <div className=" form-control">
              <div className="mt-4">
                <div>
                  <LoadCanvasTemplate />
                </div>
              </div>
              <input
                ref={captcha_value}
                placeholder=""
                className="input input-bordered"
              />
            </div>

            <button
              className="btn btn-xs btn-outline"
              onClick={handleChatchaChane}
            >
              Verify{" "}
            </button> */}

            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>

            <div className="form-control mt-6">
              <button
                // disabled={disabled}
                type="submit"
                className=" hover:opacity-70 py-3 bg-[#d1a054b3] text-white border-none font-semibold"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
