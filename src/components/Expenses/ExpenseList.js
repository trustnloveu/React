import React from "react";

import ExpenseItem from "./ExpenseItem";

import "./ExpenseList.css";

//* Component
const ExpenseList = (props) => {
  let expensesContent = <p>No Expenses Found.</p>;

  if (props.items.length > 0) {
    expensesContent = props.items.map((expense, index) => (
      <ExpenseItem key={expense.id} data={expense} /> //! [ key ] is important as an unique identifier
    ));
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense, index) => (
        <ExpenseItem key={expense.id} data={expense} /> //! [ key ] is important as an unique identifier
      ))}
    </ul>
  );
};

export default ExpenseList;

// {filteredExpenses.length === 0 && <p>No Expenses Found.</p>}
// {filteredExpenses.length > 0 &&
//   filteredExpenses.map((expense, index) => (
//     <ExpenseItem key={expense.id} data={expense} />
// ))}
