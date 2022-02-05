import { useReducer, useState } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  // onChange
  if (action.type === "CHANGE") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  // onBlur
  if (action.type === "BLUR") {
    return {
      value: state.value,
      isTouched: true,
    };
  }
  // reset
  if (action.type === "RESET") {
    return {
      value: "",
      isTouched: false,
    };
  }

  // default
  return initialInputState;
};

//* Main
const useInput = (validateFn) => {
  //* useReducer
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  //* Validation Value
  const isValid = validateFn(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  //* Validation Function
  const onChangeHandler = (event) => {
    dispatch({ type: "CHANGE", value: event.target.value });
  };

  const onBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  //* Initalize Input (To reset)
  const reset = () => {
    dispatch({ type: "RESET" });
  };

  //* return
  return {
    value: inputState.value,
    isValid,
    hasError,
    onChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useInput;
