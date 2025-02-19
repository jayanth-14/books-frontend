import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { Context } from "../data/states";

function ProtectedRoute() {
  const { isLogined } = useContext(Context);
  sessionStorage.setItem('username', 'jayanth');
  
  return isLogined ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
