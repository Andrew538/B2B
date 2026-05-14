import React from "react";
import { decode } from "html-entities";
import OrderStore from "../../store/OrderStore";
import { observer } from "mobx-react-lite";
import classes from "./orderitem.module.scss";
// import ButtonQuantity from '../ButtonQuantity/ButtonQuantity';
const OrderItem = observer(({ order }) => {


  return (
    <div className={classes.orderCard}>
      
    </div>
  );
});

export default OrderItem;

