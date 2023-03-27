import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function Layout() {
  return (
    <div>
      <NavBar />
      <div className=" w-[95%] m-auto md:w-[85%] md:m-auto ">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
