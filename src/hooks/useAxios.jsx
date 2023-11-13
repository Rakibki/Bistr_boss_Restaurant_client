import React from 'react'
import axios from "axios" 

const Axios = axios.create({
    baseURL: "http://localhost:4500"
})

const useAxios = () => {
    return Axios
}

export default useAxios