import React, { useEffect } from 'react'
import OrderList from '../components/Orders/OrderList'
import OrderStore from '../store/OrderStore';
import { observer } from 'mobx-react-lite';

const Orders = observer(() => {


  return (
    <div className="catalog__container">
      <h2>История заказов</h2>
      <OrderList />
    </div>
  );
});

export default Orders