import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Axios = axios.create({
  baseURL: "https://server-iewzw9g1k-rakibki.vercel.app",
});

const useAxios = () => {
  const { logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  Axios.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Axios.interceptors.response.use(
  //   function (response) {
  //     return response;
  //   },
  //   async function (error) {
  //     if (error.response.status === 401) {
  //       await logOutUser()
  //         .then((res) => {
  //           console.log(res, "user log out");
  //         })
  //         .catch((e) => console.log(e));
  //       navigate("/login");
  //     }
  //     return Promise.reject(error);
  //   }
  // );

  return Axios;
};

export default useAxios;
