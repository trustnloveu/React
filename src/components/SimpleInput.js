import { useEffect, useRef, useState } from "react";

/*
  To Handle User Input in Form

  1. Using 'State'
    - You'd like to check every key-stroke of user
  2. Using 'Ref'
    - It can be a good way in case you need to evaludate user input when the user submit the form
*/

const SimpleInput = (props) => {
  //* state
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false); //! To prevent side-effects from useEffect hook
  // const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== ""; // Input Validation (Empty Check). This will be updated whenever enteredName state changes
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  let formIsValid = false;
  if (enteredNameIsValid) formIsValid = true;

  //* useEffect
  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid]);

  //* ref
  // const nameInputRef = useRef();

  //* handler
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameIsTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault(); //! To avoid sending HTTP request to the server with current url
    // const enteredValue = nameInputRef.current.value;

    if (!enteredNameIsValid) return;

    // nameInputRef.current.value = '' //! Not ideal and recommanded. Don't manipulate the DOM, but, let React handler do.
    setEnteredName("");
    setEnteredNameIsTouched(false);
  };

  //* class value
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  //* return
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
