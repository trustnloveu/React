import useInput from "../hooks/use-input";

/*
  To Handle User Input in Form

  1. Using 'State'
    - You'd like to check every key-stroke of user
  2. Using 'Ref'
    - It can be a good way in case you need to evaludate user input when the user submit the form
*/

const SimpleInput = (props) => {
  //* custom hook
  const {
    value: nameInput,
    isValid: nameIsValid,
    hasError: nameError,
    onChangeHandler: nameChangeHandler,
    onBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailInput,
    isValid: emailIsValid,
    hasError: emailError,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  //* Form Validation
  let formIsValid = false;
  if (nameIsValid && emailIsValid) formIsValid = true;

  //* Form Submit
  const formSubmissionHandler = (event) => {
    event.preventDefault(); //! To avoid sending HTTP request to the server with current url

    if (!nameIsValid && !emailIsValid) return;

    nameReset();
    emailReset();
  };

  //* return
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={emailError ? "form-control invalid" : "form-control"}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailInput}
        />
        {emailError && <p className="error-text">Email is invalid.</p>}
      </div>
      <div className={nameError ? "form-control invalid" : "form-control"}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={nameInput}
        />
        {nameError && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
