import { useState, useEffect } from 'react';
import { fetchProductImage } from '../../services/categoryService/categoryService';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import classes from "./productImage.module.scss";
import { Context } from '../../context';
import { API_URL } from '../../services';
const ProductImage = ({ url, alt }) => {

  return <div className={classes.box}>  

  </div>
};

export default observer(ProductImage)


