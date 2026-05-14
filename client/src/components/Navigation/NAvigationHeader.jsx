import { NavLink } from "react-router-dom";
import classes from "./navigation.module.scss";

const NAvigationHeader = () => {
  return (
    <nav aria-label="Main Navigation" className={classes.nav}>
      <NavLink className={classes.nav__link} to="/home">
        Главная
      </NavLink>
      <NavLink className={classes.nav__link} to="/catalog">
        Каталог
      </NavLink>
      <NavLink className={classes.nav__link} to="/orders">
        Мои заказы
      </NavLink>
      <NavLink className={classes.nav__link} to="/basket">
        Корзина
      </NavLink>
      <NavLink className={classes.nav__link} to="/homeadmin">
        Админ
      </NavLink>
    </nav>
  );
};

export default NAvigationHeader;
