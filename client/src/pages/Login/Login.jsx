import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./login.module.scss";
import Button from "../../components/Button/Button";
import { Context } from "../../context";
import { useEffect } from "react";
import { $api, initAuth } from "../../services";

const Login = () => {
  return (
    <div className={`catalog__container`}>
    </div>
  );
};

export default observer(Login);
