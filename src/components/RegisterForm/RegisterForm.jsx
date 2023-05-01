import React, { useState } from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/icons/facebook.png";
import google from "../../assets/icons/google.png";
const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passError, setPassError] = useState("");

  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getPassword = (e) => {
    setPassError("");
    const password = e.target.value;
    setPassword(password);
    if (!/(?=.*?[A-Z])/.test(password)) {
      setPassError("At least one upper case");
    } else if (!/(?=.*?[a-z])/.test(password)) {
      setPassError("At least one lower case");
    } else if (!/(?=.*?[0-9])/.test(password)) {
      setPassError("At least one digit");
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setPassError("At least one special character");
    } else if (password.length < 8) {
      setPassError("Minimum password length is 8 characters");
    }
  };
  const getConfirmPassword = (e) => {
    setPassError("");
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
    if (password !== confirmPassword) {
      setPassError("password not match");
    }
  };
  console.log({ email, password, confirmPassword });
  const registerUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = `${form.firstName.value} ${form.lastName.value}`;
    console.log(fullName);
  };
  return (
    <div className=" w-2/5 mx-auto flex justify-center items-center  flex-col my-10">
      <form
        onSubmit={registerUser}
        className="w-full border py-8 px-10 space-y-4 text-black "
      >
        <p className="text-xl font-semibold">Create an account</p>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="formInput"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="formInput"
        />

        <input
          type="email"
          name="email"
          value={email}
          onChange={getEmail}
          placeholder="username or email"
          className="formInput"
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={getPassword}
          placeholder="password"
          className="formInput"
        />
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={getConfirmPassword}
          placeholder="confirm password"
          className="formInput"
        />
        <p className="text-rose-500">{passError}</p>
        <div className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <p>Show Password</p>
        </div>

        <input
          type="submit"
          value="Login"
          className="text-center w-full font-semibold py-3  bg-primary"
        />

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
