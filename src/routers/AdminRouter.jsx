import React, {  useContext } from 'react'
import useAdmin from '../hooks/useAdmin'
import { AuthContext } from '../providers/AuthProvider'
import Loadding from '../pages/shared/loadding/Loadding'
import { Navigate, useLocation } from 'react-router-dom'

const AdminRouter = ({children}) => {
    const [isAdmin, isPending] = useAdmin()
    const {user, laodding} = useContext(AuthContext)
    const location = useLocation()

    if(laodding || isPending) {
        return <Loadding />
    }

    if(user && isAdmin) {
        return children
    }

    return <Navigate state={location.pathname} to={"/"} />
}

export default AdminRouter