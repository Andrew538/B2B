import classes from "./productcard.module.scss";
import { observer } from "mobx-react-lite";
import ProductImage from "../ProductImage/ProductImage";
import ButtonQuantity from "../ButtonQuantity/ButtonQuantity";
import BasketStore from "../../store/BasketStore";
import { decode } from 'html-entities';
import { useContext, useEffect } from "react";
import ProductImageForm from "../ProductImageForm/ProductImageForm";
import ProductImages from "../ProductImage/ProductImages";
import { Context } from "../../context";

const ProductCard = ({ cardData, viewMode }) => {


  // Рендер для ПЛИТКИ (оригинальный или чуть доработанный)
  return (
    <div className={classes.card}>
      
    </div>
  );
};

export default observer(ProductCard);

