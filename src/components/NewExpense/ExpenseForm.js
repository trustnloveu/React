import React, { useState } from "react";

import "./ExpenseForm.css";

//* Component
const ExpenseForm = (props) => {
  // title, amount, date
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // titleChangeHandler
  const titleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    //   enteredAmount: userInput.enteredAmount,
    //   enteredDate: userInput.enteredDate,
    // });

    //! Important : state 업데이트에 딜레이 없음(setState 후 console.log에 이전 값이 출력되는 문제 해결)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });

    setEnteredTitle(event.target.value);
  };

  // amountChangeHandler
  const amountChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    //   enteredTitle: userInput.enteredTitle,
    //   enteredDate: userInput.enteredDate,
    // });
    setEnteredAmount(event.target.value);
  };

  // dateChangeHandler
  const dateChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    //   enteredTitle: userInput.enteredTitle,
    //   enteredAmount: userInput.enteredAmount,
    // });
    setEnteredDate(event.target.value);
  };

  // submitHnadler
  const submitHnadler = (event) => {
    event.preventDefault(); //! Important : JavaScript Function > default 동작 차단

    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseDate); //! Raising Event to NewExpense(Parent Component)

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  //* return
  return (
    <form onSubmit={submitHnadler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} //! Two-Way Binding
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount} //! Two-Way Binding
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2023-12-31"
            value={enteredDate} //! Two-Way Binding
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
