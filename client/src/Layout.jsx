import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import classes from "./layout.module.scss";
const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className={classes.main}>
        <Outlet />
      </main>
      <footer>
        <div>
          <strong>{year}</strong>
        </div>
      </footer>
    </div>
  );
};

export default observer(Layout);
