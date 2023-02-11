import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

// Context
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.value,
      isValid: action.value.includes("@"),
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.value,
      isValid: action.value.trim().length > 6,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const Login = (props) => {
  //* State
  const [formIsValid, setFormIsValid] = useState(false);

  //* dispatchFn
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null, // instead of 'false'. Also, 'undefined' is fine
  });

  const [passowrdState, dispatchPassowrd] = useReducer(passwordReducer, {
    value: "",
    isValid: undefined,
  });

  //* Context
  const authCtx = useContext(AuthContext);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passowrdState;

  //* useRef
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  //* useEffect
  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    // Clean-up Function, which will clear previous functions by the time it returns anonymous arrow function.
    return () => {
      console.log("CLEAN UP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: "USER_INPUT",
      value: event.target.value,
    });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassowrd({
      type: "USER_INPUT",
      value: event.target.value,
    });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassowrd({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passowrdState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus(); // 'External name' in Input component
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          type="email"
          id="email"
          label="E-mail"
          value={emailState.value}
          isValid={emailIsValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          type="password"
          id="password"
          label="Password"
          value={passowrdState.value}
          isValid={passwordIsValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
