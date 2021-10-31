import React, { useState } from "react";

//* Components
import Card from "../UI/Card";
import Button from "../UI/Button";

//* Css
import classes from "./AddUser.module.css";

//* Main
const AddUser = (props) => {
  //* States
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  //* addUserHandler
  const addUserHandler = (event) => {
    event.preventDefault();

    // null check > skip initializing
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
      return;
    if (+enteredAge < 1) return;

    // reset states
    setEnteredUsername("");
    setEnteredAge("");

    //! Raise Event
    props.onAddUser(enteredUsername, enteredAge);
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
