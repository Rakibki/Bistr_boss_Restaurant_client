import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const DashbortLayout = () => {
  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-3 min-h-screen'>
            <ul>
                <li><NavLink>My Card</NavLink></li>
            </ul>
        </div>
        <div className='col-span-9'>
            <Outlet />
        </div>
    </div>
  )
}

export default DashbortLayout