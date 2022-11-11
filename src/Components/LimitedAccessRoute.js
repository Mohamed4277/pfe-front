import React, {useEffect, useState} from "react";
import { Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import Login from "../Pages/Login";


function LimitedAccessRoute({isConnected,role}){
    const [hasRole, setHasRole]= useState(false);
    const {user}=useSelector((state)=>state)

    useEffect(    
      () =>  setHasRole(user && user.role && user.role.some(userRole=>userRole===role)))

   
   return isConnected && <Outlet/>;

}

export default LimitedAccessRoute;