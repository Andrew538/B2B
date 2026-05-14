import { useEffect, useState } from 'react'
import classes from "./buttonQuantity.module.scss";
import FlyingIcons from '../FlyingIcons/FlyingIcons';
import { observer } from 'mobx-react-lite';
import { runInAction } from 'mobx';

const ButtonQuantity = ({  item,   value = 0, 
  min = 0, 
  max = 99, 
  onChange, 
  disabled, 
  isUpdating, ...props }) => {
  
 return (
    <div className={classes.quantity__wrapper} style={{ position: 'relative' }}>
      
    </div>
  );
};
export default observer(ButtonQuantity)