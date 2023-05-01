/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();
  if (!user) {
    return (
      <Navigate
        to={"/user/login"}
        state={{ redirectPath: location?.pathname }}
        replace
      />
    );
  }
  if (isLoading) {
    return (
      <p>
        L<span className="animate-spin">o</span>ading..
      </p>
    );
  }
  return children;
};

export default ProtectedRoute;
