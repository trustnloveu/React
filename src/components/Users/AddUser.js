import React from "react";

//* Components
import Card from "../UI/Card";

//* Css
import classes from "./AddUser.module.css";

//* Main
const AddUser = () => {
  //* addUserHandler
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  //* return
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
