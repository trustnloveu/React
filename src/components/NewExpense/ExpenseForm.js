import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  // title, amount, date
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");

  // titleChangeHandler
  const titleChangeHandler = (event) => {
    setUserInput({
      enteredTitle: event.target.value,
      enteredAmount: userInput.enteredAmount,
      enteredDate: userInput.enteredDate,
    });
    // setEnteredTitle(event.target.value);
    console.log(userInput);
  };

  // amountChangeHandler
  const amountChangeHandler = (event) => {
    setUserInput({
      enteredTitle: userInput.enteredTitle,
      enteredAmount: event.target.value,
      enteredDate: userInput.enteredDate,
    });
    // setEnteredAmount(event.target.value);
    console.log(userInput);
  };

  // dateChangeHandler
  const dateChangeHandler = (event) => {
    setUserInput({
      enteredTitle: userInput.enteredTitle,
      enteredAmount: userInput.enteredAmount,
      enteredDate: event.target.value,
    });
    // setEnteredDate(event.target.value);
    console.log(userInput);
  };

  // return
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
