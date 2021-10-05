import React from "react";

import ExpenseItem from "./ExpenseItem";

import "./ExpenseList.css";

//* Component
const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h4 className="expense-list__fallback">Found No Expenses.</h4>;
  }

  return (
    <ul className="expenses-list">
      //! [ key ] is important as an unique identifier
      {props.items.map((expense, index) => (
        <li>
          <ExpenseItem key={expense.id} data={expense} />
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
