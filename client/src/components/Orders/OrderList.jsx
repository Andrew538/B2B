import { observer } from 'mobx-react-lite';
import React from 'react'
import OrderStore from '../../store/OrderStore';
import OrderItem from './OrderItem';
import classes from './orderlist.module.scss'
const OrderList = observer(() => {


    return (
        <div className={classes.container}>
        

            {/* Пагинация */}
            <div className={classes.pagination}>
                <button 
                    className={classes.pageBtn}
                    disabled={page === 1} 
                    onClick={() => fetchOrders(page - 1)}
                >
                    ← Назад
                </button>
                
                <span className={classes.pageInfo}>
                    Страница <strong>{page}</strong>
                </span>

                <button 
                    className={classes.pageBtn}
                    disabled={page * 20 >= totalCount} 
                    onClick={() => fetchOrders(page + 1)}
                >
                    Вперед →
                </button>
            </div>
        </div>
    );
});

export default OrderList;