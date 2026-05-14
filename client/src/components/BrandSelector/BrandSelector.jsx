import React from 'react'
import classes from './brandselector.module.scss'
import Select from 'react-select'; 
import { observer } from 'mobx-react-lite';
const BrandSelector = ({ currentBrand, brandsList, handleNavigate }) => {
  

  return (
    <div className={classes.brand_selector_container}>
     
    </div>
  );
};

export default observer(BrandSelector);