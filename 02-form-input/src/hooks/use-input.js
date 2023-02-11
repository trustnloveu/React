import { useState } from "react";

const useInput = (validateFn) => {
  //* State
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  //* Validation Value
  const isValid = validateFn(value);
  const hasError = !isValid && isTouched;

  //* Validation Function
  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const onBlurHandler = (event) => {
    setIsTouched(true);
  };

  //* Initalize Input (To reset)
  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  //* return
  return {
    value,
    isValid,
    hasError,
    onChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useInput;
