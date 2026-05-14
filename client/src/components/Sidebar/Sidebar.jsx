import { useEffect } from "react";
import { fetchAllCategoryAndBrands } from "../../services/categoryService/categoryService";
import classes from "./sidebar.module.scss";
import classNames from "classnames";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductStore from "../../store/ProductStore";
import { runInAction } from "mobx";


const Sidebar = ({ idside }) => {


  return (
    <aside className={classes.aside}>
      
    </aside>
  );
};

export default Sidebar;


