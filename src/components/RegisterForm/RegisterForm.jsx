import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/icons/facebook.png";
import google from "../../assets/icons/google.png";
const RegisterForm = () => {
  return (
    <div className=" w-2/5 mx-auto flex justify-center items-center  flex-col my-10">
      <form className="w-full border py-8 px-10 space-y-3 text-black ">
        <p className="text-xl font-semibold">Create an account</p>
        <input
          type="text"
          name="firstName"
          id=""
          placeholder="First Name"
          className="formInput"
        />
        <input
          type="text"
          name="lastName"
          id=""
          placeholder="Last Name"
          className="formInput"
        />
        <input
          type="email"
          name="email"
          id=""
          placeholder="username or email"
          className="formInput"
        />
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
          className="formInput"
        />
        <input
          type="password"
          name="confirmPassword"
          id=""
          placeholder="confirm password"
          className="formInput"
        />

        <input
          type="submit"
          value="Login"
          className="text-center w-full font-semibold py-3  bg-primary"
        />
        <div className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <p>Show Password</p>
        </div>
        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-primary" to={"/user/login"}>
            Login
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
