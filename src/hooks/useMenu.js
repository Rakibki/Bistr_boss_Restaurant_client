import React, { useState, useEffect } from 'react'
import useAxios from './useAxios'
import {
    useQuery,
  } from '@tanstack/react-query'
  
const useMenu = () => {
    const Axios = useAxios()

    const { isPending:loadding, error, data:menu=[], refetch } = useQuery({
        queryKey: ['menu'],
         queryFn: () =>
         Axios("/menu")
         .then((res) => {
            return res.data
         })
      })

  return [menu, loadding, refetch]
}

export default useMenu