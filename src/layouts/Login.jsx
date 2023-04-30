import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";

const Login = () => {
  return (
    <div>
      <div>
        <Header color="text-black" />
        <Outlet />
      </div>
    </div>
  );
};

export default Login;
