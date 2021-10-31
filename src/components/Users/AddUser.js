import React, { useState, useRef } from "react";

//* Components
import Wrapper from "../Helpers/Wrapper";
import ErrorModal from "../UI/ErrorModal";
import Card from "../UI/Card";
import Button from "../UI/Button";

//* Css
import classes from "./AddUser.module.css";

//* Constants
import ERROR_CODE from "../../constants/ErrorCode";

//* Main
const AddUser = (props) => {
  //! ref
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  //* States
  //   const [enteredUsername, setEnteredUsername] = useState("");
  //   const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();

  //* addUserHandler
  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    // null check > skip initializing
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      return setError(ERROR_CODE.INPUT_0001); // Invalid Input
    }
    if (+enteredAge < 1) {
      return setError(ERROR_CODE.INPUT_0002); // Invalid Age
    }

    // reset states
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setEnteredUsername("");
    // setEnteredUserAge("");

    //! Raise Event
    props.onAddUser(enteredName, enteredAge);
  };

  //* User-Name Input Handler
  //   const usernameChangeHandler = (event) => {
  //     setEnteredUsername(event.target.value);
  //   };

  //* User-Age Input Handler
  //   const ageChangeHandler = (event) => {
  //     setEnteredUserAge(event.target.value);
  //   };

  //* Close Error Modal
  const errorHandler = () => {
    setError(null);
  };

  //* return
  return (
    <Wrapper>
      {error && <ErrorModal error={error} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="userage"
            type="number"
            // value={enteredUserAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
