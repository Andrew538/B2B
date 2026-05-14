import { NavLink, useNavigate } from "react-router-dom";
import classes from "./header.module.scss";
import logo from "../../assets/img/logo.jpg";
import Button from "../Button/Button";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "../../context";
import Navigation from "../Navigation/Navigation";
import { useState } from "react";
import { socket } from "../../services/socketService/socket";


const Header = () => {


  return (
   
   <header className={classes.header}>

</header>

  );
};

export default observer(Header);
