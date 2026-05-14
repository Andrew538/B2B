import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import classes from "./deliverypoints.module.scss";
import CatalogStore from '../../store/CatalogStore';
import BasketStore from '../../store/BasketStore';
import { toJS } from 'mobx';
import { useEffect } from 'react';
import { Context } from '../../context';

const DeliveryPoints = observer(() => {

  return (
       <div className={classes.box}>
   
    </div>
  );
});

export default DeliveryPoints;







