import { useState } from "react";

import "./App.css";

import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";

// dummy-data
const expenses = [
  {
    id: "e1",
    date: new Date(2021, 4, 31),
    title: "자동차 보험료",
    amount: "320,400원",
  },
  {
    id: "e2",
    date: new Date(2021, 5, 0),
    title: "수도세",
    amount: "67,425원",
  },
  {
    id: "e3",
    date: new Date(2021, 5, 1),
    title: "아파트 관리비",
    amount: "150,000원",
  },
  {
    id: "e4",
    date: new Date(2021, 5, 1),
    title: "롯데카드 5월 정산",
    amount: "702,900원",
  },
];

//* App
function App() {
  // state
  const [expenseList, setExpenseList] = useState(expenses);
  const [filteredYear, setFilteredYear] = useState("2021");

  // filterChangeHandler
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // addExpenseHandler
  const addExpenseHandler = (expense) => {
    const prevExpenseList = [...expenseList];
    prevExpenseList.push(expense);

    setExpenseList(prevExpenseList);
  };

  //* return
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <div className="expense">
        {expenseList &&
          expenseList.map((expense) => (
            <ExpenseItem key={expense.id} data={expense} />
          ))}
      </div>
    </>
  );
}

export default App;
