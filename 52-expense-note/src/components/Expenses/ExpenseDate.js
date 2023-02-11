import "./ExpenseDate.css";

const ExpenseDate = ({ date }) => {
  const year = date.toLocaleString("ko-KR", { year: "numeric" });
  const month = date.toLocaleString("ko-KR", { month: "2-digit" });
  const day = date.toLocaleString("ko-KR", { day: "2-digit" });

  // return
  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
