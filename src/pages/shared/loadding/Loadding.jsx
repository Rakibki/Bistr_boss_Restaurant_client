import React from 'react'
import {DotLoader} from "react-spinners"

const Loadding = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div><DotLoader color="#D1A054" /></div>
    </div>
  )
}

export default Loadding