import React, { useState } from "react";

//* Components
import Card from "../UI/Card";
import Button from "../UI/Button";

//* Css
import classes from "./AddUser.module.css";

//* Main
const AddUser = () => {
  //* States
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  //* addUserHandler
  const addUserHandler = (event) => {
    event.preventDefault();

    // reset states
    setEnteredUsername("");
    setEnteredAge("");
  };

  //* User-Name Input Handler
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  //* User-Age Input Handler
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  //* return
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
