// import AlertMessage from "../../general/AlertMessage";
// import { useAlert } from "../../../contexts/AlertContext";
import { Outlet } from "react-router-dom";
import React from "react";

const Layout: React.FC = () => {
  //   const { value, msg, setValue, error } = useAlert();
  return (
    <>
      <Outlet />

      {/* <AlertMessage value={value} setValue={setValue} error={error} msg={msg} /> */}
    </>
  );
};

export default Layout;
