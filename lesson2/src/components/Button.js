import React from 'react';
import classes from "./Button.module.css";

const Button = ({name, color, onClick}) => {
    return (
        <button onClick={onClick} className={`${classes.btn} ${classes[color]}`}>{name}Открыть</button>
    );
};

export default Button;