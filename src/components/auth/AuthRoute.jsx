import React from "react";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  // User real data

  const isAuth = false;

  return isAuth ? children : <Navigate to="/login" />;
};

export default AuthRoute;
