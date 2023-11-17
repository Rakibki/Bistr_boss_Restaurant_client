import { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosLocal from "../../hooks/useAxiosLocal";
import { useNavigate } from "react-router-dom";

const socialLogin = () => {
  const { singInUserWithGoogle } = useContext(AuthContext);
  const AxiosLocal = useAxiosLocal();
  const navigate = useNavigate()

  const handleGoogleLogin = () => {
    singInUserWithGoogle()
      .then((res) => {
        const userInfo = {
          name: res.user.displayName,
          email: res.user.email,
        };
        console.log(userInfo);
        AxiosLocal.post("/users", userInfo)
          .then((res) => {
            if(res.data) {
              navigate("/")
            }
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className="divider font-Inter font-medium">Or sign up with</div>
      <div className="flex justify-center items-center">
        <div className="flex items-center gap-3">
          <div className="p-3 text-[#444] cursor-pointer hover:text-[#D1A054] transition hover:border-[#D1A054] border-[#444] rounded-full border-2">
            <FaFacebookF />
          </div>
          <div className="p-3 text-[#444] cursor-pointer hover:text-[#D1A054] transition hover:border-[#D1A054] border-[#444] rounded-full border-2">
            <FaGithub />
          </div>
          <div
            onClick={handleGoogleLogin}
            className="p-3 text-[#444] cursor-pointer hover:text-[#D1A054] transition hover:border-[#D1A054] border-[#444] rounded-full border-2"
          >
            <FaGoogle />
          </div>
        </div>
      </div>
    </>
  );
};

export default socialLogin;
