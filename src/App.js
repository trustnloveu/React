import ExpenseItem from "./components/ExpenseItem";

function App() {
  // data
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

  // return
  return (
    <>
      {expenses && expenses.map((expense) => <ExpenseItem data={expense} />)}
      {/* <ExpenseItem data={expenses[0]} />
      <ExpenseItem data={expenses[1]} />
      <ExpenseItem data={expenses[2]} />
      <ExpenseItem data={expenses[3]} /> */}
    </>
  );
}

export default App;
