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

  //* ref
  const nameInputRef = useRef();

  //* method
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault(); //! To avoid sending HTTP request to the server with current url

    // const enteredValue = nameInputRef.current.value;

    // To initialize form
    // nameInputRef.current.value = '' //! Not ideal and recommanded. Don't manipulate the DOM, but, let React handler do.
    setEnteredName("");
  };

  //* return
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
