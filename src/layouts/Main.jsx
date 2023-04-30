import React from "react";
import { Outlet } from "react-router-dom";
import banner from "../assets/Banner.png";
import Header from "../components/shared/Header";
const Main = () => {
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="bg-slate-800 bg-blend-overlay bg-right-top bg-no-repeat bg-cover h-screen"
    >
      <Header color="text-white" />
      <Outlet />
    </div>
  );
};

export default Main;
