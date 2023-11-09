import React from "react";
import {Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const PrivateRoute = () => {
  const token = localStorage.getItem('token');
  const isAuthenticated = token !== null;

  return isAuthenticated ? <Dashboard /> : <Navigate to="/login" />;
};

export default PrivateRoute;
