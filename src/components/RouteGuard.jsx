import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const RouteGuard = ({children}) => {
    const location = useLocation();
    if (location?.state != null) {
        return children;
    }
    else if(location){
        
    }else{
        return <Navigate to={"/"}/>
    }
}

export default RouteGuard