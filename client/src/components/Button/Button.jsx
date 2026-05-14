import React from 'react'
import classes from './button.module.scss'
const Button = ({ children, onClick,onsubmit, variant = 'primary', ...props }) => {
    // console.log(props.form)
  return (
   <button
   className={classes.button}
    onClick={onClick}
    onSubmit={onsubmit}
   >
    {children}
   </button>
  )
}

export default Button