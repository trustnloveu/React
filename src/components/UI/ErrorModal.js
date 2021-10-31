import React from "react";

//* Components
import Card from "./Card";
import Button from "./Button";

//* Css
import classes from "./ErrorModal.module.css";

//* Main
const ErrorModal = (props) => {
  //* return
  return (
    <>
      <div className={classes.backdrop}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.error.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.error.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={null}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
