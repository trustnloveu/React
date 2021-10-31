import React from "react";

//* Components
import Card from "../UI/Card";
import Button from "../UI/Button";

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
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
