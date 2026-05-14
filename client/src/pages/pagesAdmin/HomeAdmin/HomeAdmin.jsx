import React from "react";
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin";
import { Outlet } from "react-router-dom";
import classes from "./homeadmin.module.scss";
import Header from "../../../components/Header/Header";
const HomeAdmin = () => {
  return (
    <div className={`admin__container`}>
      <div className={classes.wrapper}>
        <Header />
        <div className={classes.contant}>
        <SidebarAdmin />
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
