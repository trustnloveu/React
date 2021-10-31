import React from "react";
import ReactDOM from "react-dom";

//* Components
import Wrapper from "../Helpers/Wrapper";
import Card from "./Card";
import Button from "./Button";

//* Css
import classes from "./ErrorModal.module.css";

//! Portal
//* Cover
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

//! Portal
//* Content
const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.error.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.error.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

//* Main
const ErrorModal = (props) => {
  //* return
  return (
    <Wrapper>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay error={props.error} onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </Wrapper>
  );
};

export default ErrorModal;
