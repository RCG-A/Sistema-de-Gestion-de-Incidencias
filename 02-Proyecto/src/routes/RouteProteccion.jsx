import React from 'react';
import {Link, Navigate, redirect, Outlet} from "react-router-dom"
const RouteProteccion = ({children, isAllow, redirectTo="/"}) => {
   
   if (!isAllow) {   
    return <Navigate to={redirectTo}></Navigate>
}else{
    return children? children: <Outlet/>
}
}

export default RouteProteccion;
