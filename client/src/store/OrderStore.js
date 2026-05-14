import { makeAutoObservable, runInAction } from "mobx";
import basketStore from "./BasketStore"; // Импортируем стор корзины
import { $api } from "../services";
import {
  fetchAllOrders,
  updateItemQuantityAPI,
} from "../services/orderSevice/orderService";

class OrderStore {
  
}
export default new OrderStore();
