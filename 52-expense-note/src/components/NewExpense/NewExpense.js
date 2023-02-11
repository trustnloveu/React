import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

//* Component
const NewExpense = (props) => {
  //* States
  const [isEditing, setIsEditing] = useState(false);

  //* saveExpenseDataHandler
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData); //! Raising Event to App.js
    setIsEditing(false);
  };

  //* startEditingHandler
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  //* stopEditingHandler
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  //* return
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
