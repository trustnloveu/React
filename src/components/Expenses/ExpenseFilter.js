import React from "react";

//* Component
const ExpenseFilter = (props) => {
  const selectedYear = props.selected;

  return (
    <select>
      <option>{+selectedYear}</option>
      <option>{+selectedYear + 1}</option>
      <option>{+selectedYear + 2}</option>
      <option>{+selectedYear + 3}</option>
    </select>
  );
};

export default ExpenseFilter;
