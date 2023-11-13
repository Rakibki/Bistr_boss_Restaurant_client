import { useContext } from "react";
import useAxios from "./useAxios"
import {
  useQuery,
} from "@tanstack/react-query";
import {AuthContext} from "../providers/AuthProvider"



const useCard = () => {
  const {user} = useContext(AuthContext)
  const Axios = useAxios()


    const { refetch ,isPending, error, data:card } = useQuery({
        queryKey: ['card', user?.email],
        queryFn: () =>
        Axios.get(`/cards?email=${user?.email}`)
        .then((res) => res.data) 
      })
       return [card, refetch]
}

export default useCard