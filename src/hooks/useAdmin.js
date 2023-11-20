import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProvider";
import useAxios from "./useAxios";
import Loadding from "../pages/shared/loadding/Loadding";

const useAdmin = () => {
  const { user, laodding } = useContext(AuthContext);
  const Axios = useAxios();


  const { isPending, error, data:isAdmin } = useQuery({
    enabled: !laodding && !!user?.email,
    queryKey: ['isAdmin'],
    queryFn: () =>
      Axios.get(`/user/admin/${user.email}`).then(
        (res) => res.data.isAdmin,
      ),
  })
  return [isAdmin, isPending]
};


export default useAdmin;
