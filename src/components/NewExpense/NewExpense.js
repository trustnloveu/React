import React from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

//* Component
const NewExpense = (props) => {
  // saveExpenseDataHandler
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData); //! Raising Event to App.js
  };

  //* return
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
