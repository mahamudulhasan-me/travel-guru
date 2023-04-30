import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import Header from "../components/shared/Header";

const Login = () => {
  return (
    <div>
      <div>
        <Header color="text-black" />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
