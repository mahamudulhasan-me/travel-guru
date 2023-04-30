import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form>
      <input type="email" name="email" id="" placeholder="username or email" />
      <input type="password" name="password" id="" placeholder="password" />
      <div className="flex">
        <input type="checkbox" name="" id="" />
        <Link className="text-primary">Forgat Password?</Link>
      </div>
      <input type="submit" value="Login" />
      <p>
        Don't have an account?{" "}
        <Link className="text-primary">Create an account</Link>
      </p>
    </form>
  );
};

export default LoginForm;
