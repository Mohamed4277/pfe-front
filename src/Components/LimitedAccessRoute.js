import React from "react";
import { Outlet, Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

function LimitedAccessRoute({children,role, ...rest}){
   const {user}=useSelector((state)=>state)
   
   const hasRoles=user.roles.some(roleUser=>roleUser===role)
  
   return user.isConnected  ? <Outlet/>: <Navigate to="/"/>;

}

export default LimitedAccessRoute;