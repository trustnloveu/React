import useInput from "../hooks/use-input";

const emptyCheck = (value) => value.trim() !== "";
const emailCheck = (value) => value.includes("@");

//* Main
const BasicForm = (props) => {
  //* custom input hook
  const {
    value: firstNameInput,
    isValid: firstNameIsValid,
    hasError: firstNameError,
    onChangeHandler: firstNameChangeHandler,
    onBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput(emptyCheck);

  const {
    value: lastNameInput,
    isValid: lastNameIsValid,
    hasError: lastNameError,
    onChangeHandler: lastNameChangeHandler,
    onBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput(emptyCheck);

  const {
    value: emailInput,
    isValid: emailIsValid,
    hasError: emailError,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(emailCheck);

  //* form validation
  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  //* submit
  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    firstNameReset();
    lastNameReset();
    emailReset();
  };

  //* return
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div
          className={firstNameError ? "form-control invalid" : "form-control"}
        >
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameInput}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameError && <p>Last Name is Invalid</p>}
        </div>
        <div
          className={lastNameError ? "form-control invalid" : "form-control"}
        >
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameInput}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameError && <p>First Name is Invalid</p>}
        </div>
      </div>
      <div className={emailError ? "form-control invalid" : "form-control"}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailInput}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailError && <p>Email is Invalid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
