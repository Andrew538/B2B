import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import classes from "./productlist.module.scss";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import ProductStore from "../../store/ProductStore";
import ProductSkeleton from "../ProductSkeleton/ProductSkeleton";
import { runInAction } from "mobx";
import ProductListNavigation from "../ProductListNavigation/ProductListNavigation";
import { Context } from "../../context";
import { fetchStockOfProduct } from "../../services/categoryService/categoryService";

const ProductList = () => {


  return (
    <div className={classes.container}>

    </div>
  );
};

export default observer(ProductList);

