import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/icons/facebook.png";
import google from "../../assets/icons/google.png";
const RegisterForm = () => {
  return (
    <div className=" w-2/5 mx-auto flex justify-center items-center  flex-col my-10">
      <form className="w-full border py-8 px-10 space-y-5 text-black ">
        <p className="text-xl font-semibold">Login</p>
        <input
          type="email"
          name="email"
          id=""
          placeholder="username or email"
          className="border-b outline-none w-full px-2 py-3 placeholder-gray-900 font-medium "
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
          className="border-b outline-none w-full px-2 py-3 placeholder-gray-900 font-medium "
        />
        <div className="flex justify-between">
          <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor=""> Remember me</label>
          </div>
          <Link className="text-primary">Forgat Password?</Link>
        </div>
        <input
          type="submit"
          value="Login"
          className="text-center w-full font-semibold py-3  bg-primary"
        />
        <p className="text-center">
          Don't have an account?{" "}
          <Link className="text-primary" to={"/register"}>
            Create an account
          </Link>
        </p>
      </form>
      {/* social media login method  */}
      <div className="w-4/5 mx-auto mt-5">
        <div className="flex items-center gap-2 mb-4 ">
          <div className="w-full h-0.5 bg-slate-700"></div>
          <p className="text-lg">or</p>
          <div className="w-full h-0.5 bg-slate-700"></div>
        </div>
        <div className="w-full mx-auto space-y-5">
          <Link className="flex border text-center rounded-3xl p-2 mx-5 gap-10 ">
            <img src={facebook} alt="" />
            <span className="font-semibold"> Continue With Facebook</span>
          </Link>
          <Link className="flex border text-center rounded-3xl p-2 mx-5 gap-10">
            <img src={google} alt="" />
            <span className="font-semibold">Continue With Google</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
