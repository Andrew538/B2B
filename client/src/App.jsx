import { Route, Routes} from "react-router-dom";
import { useContext, useEffect, Suspense, lazy } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { observer } from "mobx-react-lite";

import Orders from "./pages/Orders";
import Basket from "./pages/Basket";

import Category from "./pages/Category";
import Catalog from "./pages/Catalog/Catalog";
import { ProtectedRoute } from "./routes/PrivateRoute";
import GeneralLayout from "./GeneralLayout";
import classes from './app.module.scss'
import Layout from "./Layout";
import { initAuth } from "./services";
import { Context } from "./context";
import BasketStore from "./store/BasketStore";
import { socket } from "./services/socketService/socket";
import { ChatPageManagers } from "./pages/pagesManagers/ChatPageManagers";
import { ChatPageClients } from "./pages/ChatPageClients";

const HomeAdmin = lazy(() => import('./pages/pagesAdmin/HomeAdmin/HomeAdmin'));
const Product = lazy(() => import('./pages/pagesAdmin/Product/Product'));
const NewClient = lazy(() => import('./pages/pagesAdmin/NewClient/NewClient'));
const ChatPageAdmin = lazy(() => import('./pages/pagesAdmin/ChatAdmin/ChatPageAdmin'));
function App() {


  const { store } = useContext(Context);

  return (
    <Routes>
         <Route path="/" element={<GeneralLayout />} />
      <Route path="/login" element={<GeneralLayout />} /> 
 
  <Route path="*" element={<GeneralLayout />} />
</Routes>

  );
}

export default observer(App);
