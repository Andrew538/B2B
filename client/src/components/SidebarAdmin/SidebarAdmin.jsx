import { NavLink } from 'react-router-dom'
import classes from './sidebaradmin.module.scss'

const SidebarAdmin = () => {
  return (
    <div className={classes.box}>
        <NavLink to='product'>Товары/цены</NavLink>
        <NavLink to='clients'>Клиенты</NavLink>
        <NavLink to='chat-admin'>Чат c клиентами </NavLink>
        <NavLink>Цены</NavLink>
    </div>
  )
}

export default SidebarAdmin