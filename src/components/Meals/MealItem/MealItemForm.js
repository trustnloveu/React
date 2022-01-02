import { useRef, useState } from "react";

// CSS
import classes from "./MealItemForm.module.css";

// Component
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value; // This value is always 'string', even if the type of input is 'number'
    const enteredAmountNumber = +enteredAmount; // To convert to 'integer'

    // Validation
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    // Add to Cart
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "0",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please entere a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
