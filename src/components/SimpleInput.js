import { useRef, useState } from "react";

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
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false); //! To prevent side-effects from useEffect hook

  //* ref
  const nameInputRef = useRef();

  //* method
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault(); //! To avoid sending HTTP request to the server with current url

    setEnteredNameIsTouched(true); // Flag to check if Input has changed

    // Input Validation (Empty Check)
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    // const enteredValue = nameInputRef.current.value;

    // To initialize form
    // nameInputRef.current.value = '' //! Not ideal and recommanded. Don't manipulate the DOM, but, let React handler do.
    setEnteredName("");
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
  const nameInputClasses = nameInputIsInvalid
    ? "form-control"
    : "form-control invalid";

  //* return
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
