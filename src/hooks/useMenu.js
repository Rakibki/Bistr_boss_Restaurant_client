import useAxios from './useAxios'
import {
    useQuery,
  } from '@tanstack/react-query'
  
const useMenu = (sortText, maxPrice, minPrice, serch) => {
    const Axios = useAxios()



    const { isPending:loadding, data:menu=[], refetch } = useQuery({
        queryKey: ['menu', sortText, serch],
         queryFn: () =>
         Axios(`/menu?sort=${sortText}&maxPrice=${maxPrice}&minPrice=${minPrice}&serch=${serch}`)
         .then((res) => {
            return res.data
         })
      })

  return [menu, loadding, refetch]
}

export default useMenu