import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";

const increaseAmount = 10;

//* Main
const Counter = () => {
  //* useSelector
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  //* useDispatch
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const incrementAction = () => {
    dispatch({ type: "incrementAction", amount: increaseAmount });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increase ( + )</button>
        <button onClick={incrementAction}>
          Increase ( +{increaseAmount} )
        </button>
        <button onClick={decrementHandler}>decrease ( - )</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
