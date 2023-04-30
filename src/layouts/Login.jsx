import React from "react";
import { Outlet } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";
import Header from "../components/shared/Header";

const Login = () => {
  return (
    <div>
      <div>
        <Header color="text-black" />
        <LoginForm />
        <Outlet />
      </div>
    </div>
  );
};

export default Login;
