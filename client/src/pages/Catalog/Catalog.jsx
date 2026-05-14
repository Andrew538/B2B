import { useContext, useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import classes from "./catalog.module.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProductList from "../../components/ProductList/ProductList";
import { observer } from "mobx-react-lite";
import DeliveryPoints from "../../components/DeliveryPoints/DeliveryPoints";
import { Context } from "../../context";
import CatalogStore from "../../store/CatalogStore";
import OrderStore from "../../store/OrderStore";
import PriceOfProductStore from "../../store/PriceOfProductStore";

const Catalog = () => {
};


export default observer(Catalog);
