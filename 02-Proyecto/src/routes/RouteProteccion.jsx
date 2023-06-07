import React from 'react';
import {Link, Navigate, redirect, Outlet} from "react-router-dom"
const RouteProteccion = ({children, isLogin, redirectTo="/"}) => {
   
   if (isLogin) {
    return <Navigate to={redirectTo}></Navigate>
}else{
    return children? children: <Outlet/>
}
}

export default RouteProteccion;
