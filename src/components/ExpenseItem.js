import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //   const expenseDate = new Date(2021, 4, 31);
  //   const expenseTitle = "자동차 보험료";
  //   const exepnseAmount = "320,400원";

  // return
  return (
    <div className="expense-item">
      <div>{props.data.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.data.title}</h2>
        <div className="expense-item__price">{props.data.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
