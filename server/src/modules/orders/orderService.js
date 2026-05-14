import { BasketItem, DeliveryPoint, GroupPrice, Order, OrderItem, Organization, Product, User, } from "../../config/initModels.js";
import sequelize from '../../config/db.js'
import { generateNextOrderNumber } from "./orderController.js";
