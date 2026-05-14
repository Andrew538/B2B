import { NavLink } from "react-router-dom";
import classes from "./navigation.module.scss";
import { observer } from "mobx-react-lite";
const Navigation = ({ store, isOpen, closeMenu, onLogout  }) => {
  return (
  <nav className={`${classes.nav} ${isOpen ? classes.active : ''}`}>
      <NavLink className={classes.nav__link} to="/home" onClick={closeMenu}>
        Главная
      </NavLink>
      <NavLink className={classes.nav__link} to="/catalog" onClick={closeMenu}>
        Каталог
      </NavLink>
      <NavLink className={classes.nav__link} to="/orders" onClick={closeMenu}>
        Мои заказы
      </NavLink>
      <NavLink className={classes.nav__link} to="/basket" onClick={closeMenu}>
        Корзина
      </NavLink>
      { userRole === 'user' && (
       <NavLink className={classes.nav__link} to="/chat" onClick={closeMenu}>
        Чат c продавцом
      </NavLink>
      )
      }
      <div className={classes.nav__mobile_exit}>
      <button onClick={onLogout}>Выйти</button>
    </div>
    </nav>
  );
};

export default observer(Navigation);
