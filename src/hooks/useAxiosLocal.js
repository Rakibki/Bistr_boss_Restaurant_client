import axios from "axios"

const AxiosLocal = axios.create({
    baseURL: "http://localhost:4500"
})

const useAxiosLocal = () => {
  return AxiosLocal
}

export default useAxiosLocal