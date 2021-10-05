import { useState } from "react";

import "./App.css";

import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import ExpenseList from "./components/Expenses/ExpenseList";
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

  // filteredExpenses
  const filteredExpenses = expenseList.filter((list) => {
    return list.date.getFullYear().toString() === filteredYear;
  });

  // addExpenseHandler
  const addExpenseHandler = (expense) => {
    //* Way - 1
    // const prevExpenseList = [...expenseList];
    // prevExpenseList.push(expense);
    // setExpenseList(prevExpenseList);

    //* Way - 2
    // setExpenseList([expense, ...expenseList]);

    //* Way - 3   >   important
    setExpenseList((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  //* return
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />

      <div className="expense">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseList items={filteredExpenses} />
      </div>
    </>
  );
}

export default App;
