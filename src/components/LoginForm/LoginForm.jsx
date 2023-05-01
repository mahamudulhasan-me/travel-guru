import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import facebook from "../../assets/icons/facebook.png";
import google from "../../assets/icons/google.png";
import { AuthContext } from "../../provider/AuthProvider";
const LoginForm = () => {
  const [error, setError] = useState("");
  const { userSignInWithEmailAndPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  // handle user sing in
  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userSignInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        navigate("/");
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className=" w-2/5 mx-auto flex justify-center items-center  flex-col my-10">
      <form
        onSubmit={handleSignIn}
        className="w-full border py-8 px-10 space-y-5 text-black "
      >
        <p className="text-xl font-semibold">Login</p>
        <input
          type="email"
          name="email"
          id=""
          placeholder="username or email"
          className="formInput"
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
          className="formInput"
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
          <Link className="text-primary" to={"/user/register"}>
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

export default LoginForm;
