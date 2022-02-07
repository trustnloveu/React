import { useDispatch, useSelector } from "react-redux";

//* reducer action with redux-toolkit
import { counterActions } from "../store/counterSlice";

import classes from "./Counter.module.css";

const increaseAmount = 10;

//* Main
const Counter = () => {
  //* useSelector
  const counter = useSelector((state) => state.counter.counter); //! 'state.counter' for a single reducer
  const showCounter = useSelector((state) => state.counter.showCounter);

  //* useDispatch
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const incrementAction = () => {
    dispatch(counterActions.increaseAmount(increaseAmount)); // { type: 'SOME_UNIQUE_IDENTIFIER', payload: '10' }
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
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
