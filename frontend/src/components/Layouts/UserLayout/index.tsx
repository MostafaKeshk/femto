import { Outlet } from "react-router-dom";
import React from "react";
import Nav from "./Nav";

const UserLayout: React.FC = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default UserLayout;
