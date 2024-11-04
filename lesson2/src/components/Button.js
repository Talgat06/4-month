import React from 'react';
import classes from "./Button.module.css";

const Button = ({children, color, onClick}) => {
    return (
        <button onClick={onClick} className={`${classes.btn} ${classes[color]}`}>{children}</button>
    );
};

export default Button;