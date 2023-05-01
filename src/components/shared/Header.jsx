import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png";
import { AuthContext } from "../../provider/AuthProvider";

const Header = (props) => {
  const { user } = useContext(AuthContext);
  return (
    <div className={`navbar  px-[10%] py-5 p ${props.color}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>News</a>
            </li>
            <li>
              <a>Destination</a>
            </li>

            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <Link>
          <div className="flex items-center">
            <img src={logo} alt="Travel Guru Logo" className="w-20" />
            <p className="text-2xl font-semibold text-primary">
              Travel <br /> <span className="ml-2 italic">Guru</span>
            </p>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>Booking</Link>
          </li>

          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <p className="font-semibold">{user.displayName}</p>
            <button className=" bg-primary w-28 py-3 ml-2 rounded-md text-center font-medium ">
              LogOut
            </button>
          </>
        ) : (
          <Link
            to={"/user/login"}
            className=" bg-primary w-28 py-3 rounded-md text-center font-medium "
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
