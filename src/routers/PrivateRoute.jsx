import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import {Navigate, useLocation}  from "react-router-dom"
import Loadding from "../pages/shared/loadding/Loadding"

const PrivateRoute = ({children}) => {
    const {user, loadding} = useContext(AuthContext)
    const location = useLocation()

    if(loadding) {
        return <Loadding />
    }

    if(user) {
        return children
    }

    return <Navigate state={location.pathname} to={"/login"} />

}

export default PrivateRoute