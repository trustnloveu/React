import React from "react";

//* Css
import classes from "./Card.module.css";

//* Main
const Card = (props) => {
  //* return
  return (
    <div className={`${props.className} ${classes.card}`}>{props.children}</div>
  );
};

export default Card;
